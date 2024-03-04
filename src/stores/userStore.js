import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, watch } from 'vue'

export const useUserStore = defineStore('user', () => {
  // State
  const user = ref({
    username: null,
    email: null,
    isAdmin: false,
    img: null,
    accessToken: null
  })
  const isLoading = ref(false)
  const isError = ref(false)
  const listUsers = ref([])

  // Get user from localStorage
  if (localStorage.getItem('user')) {
    user.value = JSON.parse(localStorage.getItem('user'))
  }

  // Watch for changes in user and update localStorage
  watch(
    user,
    (userVal) => {
      localStorage.setItem('user', JSON.stringify(userVal))
    },
    {
      deep: true
    }
  )

  // Login
  const loginAdmin = async (username, password) => {
    ;(isLoading.value = true), (isError.value = false)
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}auth/login`, {
        username,
        password
      })
      user.value.username = response.data.username
      user.value.email = response.data.email
      user.value.isAdmin = response.data.isAdmin
      user.value.accessToken = response.data.accessToken
    } catch (error) {
      isError.value = true
    } finally {
      isLoading.value = false
    }
  }

  // Logout
  const logoutAdmin = () => {
    user.value = {
      username: null,
      email: null,
      isAdmin: false,
      accessToken: null
    }
    localStorage.removeItem('user')
  }

  // fetch list users
  const fetchListUsers = async () => {
    isLoading.value = true
    isError.value = false
    const options = {
      headers: {
        Authorization: `Bearer ${user.value.accessToken}`
      }
    }
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}user`, options)
      listUsers.value = response.data
    } catch (error) {
      isError.value = true
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  // Return values
  return {
    user,
    listUsers,
    isLoading,
    isError,
    loginAdmin,
    logoutAdmin,
    fetchListUsers
  }
})
