<template>
  <header
    class="w-screen bg-white opacity-70 fixed top-0
    border-b border-grey-500 shadow-md
    "
  >
    <div class="container">
      <div class="h-20 flex flex-row items-center justify-between">
        <img src="@/assets/logo.png" alt="" class="h-16">
        <nav class="flex-1 flex flex-row justify-center">
          <router-link v-for="(route, key) in $router.options.routes" :key="key" :to="route.path" class="mx-4">{{ route.name }}</router-link>
        </nav>
        <router-link to="#contact"
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Kontakt
        </router-link>
      </div>
    </div>
  </header>
</template>
<script setup></script>
