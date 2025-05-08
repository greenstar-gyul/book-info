<template>
    <header class="header">
      <div class="left">
        <button class="hamburger" @click="router.push('/')">🏠</button>
        <!-- <span class="page-title">{{ currentPage }}</span> -->
      </div>
      <h1 class="blog-name">책!!!</h1>
    </header>
  </template>
  
  <script setup>
import { useRouter } from 'vue-router';

  // defineProps(['currentPage']);
  // defineEmits(['toggle-sidebar']);
  const router = useRouter();
  </script>
  
  <style scoped>
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    background-color: #4a90e2;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    z-index: 1000;
  }
  .left {
    display: flex;
    align-items: center;
  }
  .hamburger {
    font-size: 1.5rem;
    background: none;
    border: none;
    color: white;
    margin-right: 1rem;
    cursor: pointer;
  }
  .blog-name {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.2rem;
  }
  .page-title {
    font-weight: bold;
    font-size: 1rem;
  }
  </style>
  