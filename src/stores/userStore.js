import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, watch } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    username: null,
    email: null,
    isAdmin: false,
    accessToken: null
  })
  const isLoading = ref(false)
  const isError = ref(false)
  if (localStorage.getItem('user')) {
    user.value = JSON.parse(localStorage.getItem('user'))
  }

  watch(
    user,
    (userVal) => {
      localStorage.setItem('user', JSON.stringify(userVal))
    },
    {
      deep: true
    }
  )

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

  return {
    user,
    isLoading,
    isError,
    loginAdmin
  }
})
