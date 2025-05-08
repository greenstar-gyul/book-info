<template>
    <div class="bg-light border-end vh-100 sidebar p-3">
      <ul class="nav flex-column">
  
        <!-- 홈 -->
        <li class="nav-item mb-2">
          <RouterLink to="/" class="nav-link">🏠 홈</RouterLink>
        </li>
  
        <!-- 구분선 -->
        <li><hr /></li>
  
        <!-- Algorithm 섹션 -->
        <li class="nav-item text-muted fw-bold mb-1">📘 ㅋㅋ</li>
        <li class="nav-item ps-3">
          <RouterLink to="/algorithm/data-structure" class="nav-link">목록 1</RouterLink>
        </li>
        <li class="nav-item ps-3">
          <RouterLink to="/algorithm/algorithm" class="nav-link">목록 2</RouterLink>
        </li>
  
        <!-- 구분선 -->
        <li><hr /></li>
  
        <!-- 웹페이지 섹션 -->
        <li class="nav-item text-muted fw-bold mb-1">🌐 ㅋㅋ2</li>
        <li class="nav-item ps-3">
          <RouterLink to="/webdev/vue-express" class="nav-link">목록 1</RouterLink>
        </li>
        <li class="nav-item ps-3">
          <RouterLink to="/webdev/frontend" class="nav-link">목록 2</RouterLink>
        </li>
        <li class="nav-item ps-3">
          <RouterLink to="/webdev/backend" class="nav-link">목록 3</RouterLink>
        </li>

        <!-- 구분선 -->
        <li><hr /></li>
  
        <!-- Portfolio 섹션 -->
        <li class="nav-item text-muted fw-bold mb-1">🧰 ㅋㅋ3</li>
        <li class="nav-item ps-3">
          <RouterLink to="/portfolio/1" class="nav-link">목록1</RouterLink>
        </li>
        <li class="nav-item ps-3">
          <RouterLink to="/portfolio/2" class="nav-link">목록2</RouterLink>
        </li>
  
      </ul>
    </div>
  </template>
  
  <style scoped>
  .sidebar {
    width: 200px;
    position: fixed;
    top: 60px;
    left: 0;
    overflow-y: auto;
    z-index: 999;
  }

  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s ease;
  }

  .slide-enter-to,
  .slide-leave-from {
    transform: translateX(0);
    opacity: 1;
  }

  .nav-link {
    color: #333;
  }

  .nav-link
  .router-link-active {
    font-weight: bold;
    color: #0d6efd;
  }
</style>
  