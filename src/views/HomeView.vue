<script>

import {useUserStore} from '@/stores/userStore'
import {onMounted,computed} from 'vue'
import { useRouter } from 'vue-router' 




export default {
  setup() {
    const userStore = useUserStore()
    const isAdmin =  computed(() => userStore.isAdmin)
    const router = useRouter()

    onMounted(() => {
   if(!isAdmin.value){
   router.push('/login')
   }
    })
 
}}
</script>

<template>
  <h1 >Hello Home</h1>
</template>