<script>
import { RouterView } from 'vue-router'
import TopBar from './TopBar.vue'
import SideBar from './SideBar.vue'
export default {
  components: {
    RouterView,
    TopBar,
    SideBar
  }
}
</script>

<template>
  <TopBar />
  <div class="flex">
    <SideBar />
    <RouterView />
  </div>
</template>