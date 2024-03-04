<script>
import { useUserStore } from '@/stores/userStore'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const userStore = useUserStore()
    const user = ref('')
    const password = ref('')
    const isAdmin = computed(() => userStore.user.isAdmin)

    // Check if user is admin and redirect to login page if not
    watch(
      isAdmin,
      (isAdminVal) => {
        if (isAdminVal) {
          router.push('/')
        }
      },
      { immediate: true }
    )

    // Login admin
    const handleSubmit = async () => {
      await userStore.loginAdmin(user.value, password.value)
    }

    return {
      handleSubmit,
      user,
      password
    }
  }
}
</script>

<template>
  <div class="mt-10">
    <v-container class="text-center md:w-50 h-screen">
      <v-row justify="center">
        <v-col cols="12" md="8" sm="6" class="h-100">
          <v-avatar :style="{ backgroundColor: 'red' }">
            <v-icon icon="$lock" color="white"></v-icon>
          </v-avatar>
          <div class="text-h3 mt-4 h-sceen">Login</div>
          <v-form @submit.prevent>
            <v-text-field
              v-model="user"
              label="username"
              type="text"
              prepend-icon="$account"
              placeholder="admin"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              prepend-icon="$lock"
              placeholder="admin"
              required
            ></v-text-field>
            <v-btn @click="handleSubmit" type="submit" class="w-full" color="primary">Login</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
