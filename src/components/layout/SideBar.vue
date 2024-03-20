<template>
  <v-layout class="flex-initial">
    <div class="h-screen bg-gray-100 sticky">
      <div class="p-[20px] text-[#555]">
        <div class="mb-[10px]">
          <h3 className="text-xs text-gray-500">Dashboard</h3>
          <ul>
            <router-link to="/">
              <li class="p-[5px] cursor-pointer flex items-center rounded-[10px]">
                <v-icon icon="$home" color="black"></v-icon>Home
              </li></router-link
            >
          </ul>
        </div>
        <div class="mb-[10px]">
          <h3 className="text-xs text-gray-500">Quick Menu</h3>
          <ul>
            <router-link to="/users">
              <li class="p-[5px] cursor-pointer flex items-center rounded-[10px]">
                <v-icon icon="$accountMultiple" color="black" /> Users
              </li></router-link
            >
            <router-link to="/product">
              <li class="p-[5px] cursor-pointer flex items-center rounded-[10px]">
                <v-icon icon="$packageVariant" color="black" /> Products
              </li></router-link
            >
          </ul>
        </div>
      </div>
    </div>
  </v-layout>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 5px;
}
</style>
