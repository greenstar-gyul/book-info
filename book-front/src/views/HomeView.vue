<script setup>
import { onMounted, ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const books = ref([]);
const currentPage = ref(1);
const itemsPerPage = 12;
const totalItems = ref(0);

// 📥 서버에서 페이지 단위로 불러오기
const loadBooks = async () => {
  const res = await axios.get(`/api/book?page=${currentPage.value}&size=${itemsPerPage}`);
  books.value = res.data.books;
  totalItems.value = res.data.total;
};

onMounted(loadBooks);
watch(currentPage, loadBooks);
watch(() => route.fullPath, () => {
  currentPage.value = 1;
  loadBooks();
});

const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage));
</script>

<template>
  <div class="container mt-5">
    <!-- 헤더 영역 -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0">📚 전체 도서 목록</h2>
      <RouterLink class="btn btn-success btn-sm" to="/book/register">➕ 도서 등록</RouterLink>
    </div>

    <!-- 도서 카드 목록 -->
    <div class="row" v-if="books.length > 0">
      <div class="col-md-6 col-lg-4 mb-4" v-for="book in books" :key="book.id">
        <div class="card h-100 shadow-sm">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              <span class="badge bg-secondary me-2">#{{ book.id }}</span>
              {{ book.title }}
            </h5>
            <p class="card-text text-muted text-truncate" style="max-height: 3em;">{{ book.summary }}</p>
            <div class="mt-auto">
              <RouterLink class="btn btn-outline-primary btn-sm w-100" :to="`/book/${book.id}`">
                📖 자세히 보기
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 페이지네이션 -->
    <nav v-if="totalPages > 1" class="mt-4 d-flex justify-content-center">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="currentPage--" :disabled="currentPage === 1">이전</button>
        </li>
        <li
          v-for="page in totalPages"
          :key="page"
          class="page-item"
          :class="{ active: page === currentPage }"
        >
          <button class="page-link" @click="currentPage = page">{{ page }}</button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="currentPage++" :disabled="currentPage === totalPages">다음</button>
        </li>
      </ul>
    </nav>

    <!-- 책이 없을 때 -->
    <div v-else class="text-center text-muted mt-4">
      <i>현재 추가된 책이 없거나 찾을 수 없어요...</i>
    </div>
  </div>
</template>
