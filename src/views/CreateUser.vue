<script>
import { ref } from 'vue'
import { useField, useForm, defineRule } from 'vee-validate'
import { useUserStore } from '@/stores/userStore'

export default {
  setup() {
    const userStore = useUserStore()

    const { handleSubmit } = useForm({
      validationSchema: {
        name(value) {
          if (value?.length >= 3) return true

          return 'Name needs to be at least 3 characters.'
        },
        email(value) {
          if (/^[a-z|\d]+@[a-z]+\.[a-z|\d]{2,4}$/.test(value)) return true
          return 'Must be a valid email.'
        },
        role(value) {
          if (value) return true
          return 'Please select a role.'
        },
        password(value) {
          if (value?.length >= 5) return true
          return 'Password needs to be at least 5 characters.'
        },
        confirmPassword(value) {
          if (password.value.value === value) return true
          return 'Passwords do not match.'
        }
      }
    })
    defineRule('confirmed', (value, { target }) => {
      if (value === target) return true
      return 'Passwords do not match.'
    })

    const name = useField('name')
    const email = useField('email')
    const password = useField('password')
    const confirmPassword = useField('confirmPassword')
    const role = useField('role')

    const roles = ref(['admin', 'user'])

    const submit = handleSubmit(async (values) => {
      const user = {
        name: values.name,
        email: values.email,
        password: values.password,
        role: values.role
      }
      await userStore.createNewUser(user)
    })

    return {
      name,
      email,
      password,
      role,
      roles,
      confirmPassword,
      submit
    }
  }
}
</script>

<template>
  <v-main>
    <v-sheet class="mx-auto mt-10" width="400">
      <div class="text-h5 text-center">Create User</div>
      <v-form @submit.prevent="submit" class="mt-4">
        <v-text-field
          v-model="name.value.value"
          :error-messages="name.errorMessage.value"
          label="name"
        ></v-text-field>
        <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          type="email"
          label="email"
        ></v-text-field>
        <v-select
          v-model="role.value.value"
          :error-messages="role.errorMessage.value"
          label="Role"
          :items="roles"
        ></v-select>
        <v-text-field
          v-model="password.value.value"
          :error-messages="password.errorMessage.value"
          hint="Enter your password to access this website"
          label="Password"
          type="password"
        ></v-text-field>
        <v-text-field
          v-model="confirmPassword.value.value"
          :error-messages="confirmPassword.errorMessage.value"
          hint="Confirm your password to access this website"
          label="Confirm Password"
          type="password"
        ></v-text-field>
        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
      </v-form>
    </v-sheet>
  </v-main>
</template>
