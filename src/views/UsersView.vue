<script>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import { onMounted, computed } from 'vue'
import { LoaderComponent } from '@/components'
export default {
  components: {
    LoaderComponent
  },
  data() {
    return {
      selected: [],
      headers: [
        {
          title: '',
          value: 'checkbox',
          align: 'center',
          sortable: false
        },
        {
          title: 'ID',
          key: '_id',
          align: 'start'
        },
        {
          title: 'user',
          key: 'username',
          align: 'start'
        },
        {
          title: 'Email',
          key: 'email',
          align: 'start'
        },
        {
          title: 'Actions',
          key: 'actions',
          value: 'actions',
          sortable: false
        }
      ]
    }
  },

  setup() {
    const router = useRouter()
    const userStore = useUserStore()
    const isLoading = computed(() => userStore.isLoading)
    const listUsers = computed(() => userStore.listUsers)
    onMounted(async () => {
      await userStore.fetchListUsers()
    })

    const editUser = (user) => {
      router.push({ path: `/user/${user._id}` })
    }

    return {
      listUsers,
      editUser,
      isLoading
    }
  }
}
</script>

<template>
  <LoaderComponent v-if="isLoading" />
  <v-main v-else>
    <v-data-table
      :headers="headers"
      :items="listUsers"
      item-value="_id"
      select-all
      v-model:selected="selected"
      item-key="_id"
    >
      <template v-slot:item="{ item }">
        <tr class="cursor-pointer" @click="editUser(item)">
          <td class="checkboxTD">
            <v-checkbox
              v-model="selected"
              :value="item"
              @click.stop
              :input-value="item"
            ></v-checkbox>
          </td>
          <td>{{ item._id }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
          <td class="space-x-2">
            <v-icon class="cursor-pointer" icon="$accountEdit" />
            <v-icon class="cursor-pointer" icon="$delete" />
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-main>
</template>

<style scoped>
.checkboxTD :deep(.v-input__details),
.checkboxTD :deep(.v-messages) {
  min-height: 0px !important;
}
</style>
