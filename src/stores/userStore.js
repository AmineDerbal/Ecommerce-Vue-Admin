import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    username: null,
    emai: null,
    isAdmin: false,
    accessToken: null,
    isLoading: false,
    isError: false
  }),
  actions: {}
})
