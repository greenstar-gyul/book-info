<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const books = ref([]);
const loadAllBooks = async function() {
  const result = await axios.get(`/api/book`);
  books.value = await result.data;
}
onMounted(() => {
  loadAllBooks();
})
</script>
<template>
<div class="container mt-5">
  <!-- 헤더 영역 -->
  <div class="d-flex justify-content-between align-items-center mb-4">
    <h2 class="mb-0">📚 전체 도서 목록</h2>
    <RouterLink class="btn btn-success btn-sm" to="/book/register">
      ➕ 도서 등록
    </RouterLink>
  </div>

  <!-- 도서 카드 목록 -->
  <div class="row" v-if="books.length > 0">
    <div class="col-md-6 col-lg-4 mb-4" v-for="book in books" :key="book.id">
      <div class="card h-100 shadow-sm">
        <div class="card-body d-flex flex-column">
          <!-- 제목 -->
          <h5 class="card-title">
            <span class="badge bg-secondary me-2">#{{ book.id }}</span>
            {{ book.title }}
          </h5>

          <!-- 요약 (줄임 표시) -->
          <p class="card-text text-muted text-truncate" style="max-height: 3em;">
            {{ book.summary }}
          </p>

          <!-- 자세히 보기 버튼 -->
          <div class="mt-auto">
            <RouterLink
              class="btn btn-outline-primary btn-sm w-100"
              :to="`/book/${book.id}`"
            >
              📖 자세히 보기
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 책이 없을 때 -->
  <div v-else class="text-center text-muted mt-4">
    <i>현재 추가된 책이 없거나 찾을 수 없어요...</i>
  </div>
</div>

</template>
