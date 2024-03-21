<script>
import { useRoute } from 'vue-router'
import {useUserStore} from '@/stores/userStore'
import {LoaderComponent} from '@/components'
import { onMounted, computed } from 'vue'

const blankProfile = new URL('@/assets/images/blank_profile.svg', import.meta.url).href

export default {
    components:{
        LoaderComponent
    },

    setup() {
        const route = useRoute()
        const userStore = useUserStore()
        const userId = route.params.id
        console.log(userId)
        const isLoading = computed(() => userStore.isLoading)
        const userData = computed(() => userStore.userData)
        

        onMounted(async () => {
            await userStore.fetchUserData(userId)
          
        })
 
        return {
            userStore,
            userData,
            isLoading,
            blankProfile
        }
    }
}

</script>

<template>
    <LoaderComponent v-if="isLoading" />
  
    <v-main fluid full-height v-else>
        <v-layout row >
            <v-card class="mt-10 mx-auto" width="50%">
                <v-card-text >
                    <div class="mb-4 d-flex flex-row justify-center " >
                        <v-avatar size="96" class="mr-4 rounded">
                            <img :src="userData.image_url !== null ? userData.image_url : blankProfile">
                        </v-avatar>
                    </div>
                    <v-text-field
                        v-model="userData.name"
                        label="name"></v-text-field>
                
                    <v-text-field
                        v-model="userData.email"
                        label="Email Address"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" >
                        Save Changes
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
        <v-layout row full-height class="mt-10" >
            <div class="w-1/2 mx-auto">
                <v-btn color="primary" @click="$router.push('/users/create')">
          
          Create new User
      </v-btn>
            </div>
          

        </v-layout>
   
    </v-main>

</template>

