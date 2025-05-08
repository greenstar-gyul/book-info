<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
// import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue'

const showSidebar = ref(false);
// const currentPage = ref('홈');

// const toggleSidebar = () => {
//   showSidebar.value = !showSidebar.value;
// };

// const updatePageTitle = (title) => {
//   currentPage.value = title;
// };
</script>

<template>
  <!-- <Header @toggle-sidebar="toggleSidebar"></Header> -->
  <Header></Header>
  <!-- <Transition name="slide">
    <Sidebar v-if="showSidebar"></Sidebar>
  </Transition> -->
  <div class="main-content">
    <RouterView/>
  </div>
</template>

<style>
body {
  margin: 0;
}
.main-content {
  padding-top: 60px; /* header height */
  padding-left: 0;
  transition: padding-left 0.3s;
}
@media (min-width: 768px) {
  /* .main-content {
    padding-left: 200px;
  } */
}
</style>
