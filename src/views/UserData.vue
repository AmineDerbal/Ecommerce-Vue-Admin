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
  
    <v-main fluid v-else>
        <v-layout column>
            <v-card>
                <v-card-text>
                    <v-flex class="mb-4">
                        <v-avatar size="96" class="mr-4">
                            <img :src="userData.image_url !== null ? userData.image_url : blankProfile">
                        </v-avatar>
                    </v-flex>
                    <v-text-field
                        v-model="userData.name"
                        label="name"></v-text-field>
                
                    <v-text-field
                        v-model="userData.email"
                        label="Email Address"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" >
                        <v-icon left dark>check</v-icon>
                        Save Changes
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
   
    </v-main>

</template>