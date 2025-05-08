<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const bookId = ref('');
const book = ref({
  title: "",
  summary: "",
  author: "",
  publish_date: "",
  publisher: "",
  isbn: ""
});

const registerBook = async function() {
  const result = await axios.post(`/api/book/${bookId.value}`, book.value);
  router.push('/');
}

</script>
<template>
<div class="container mt-5" v-if="book">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card shadow-sm">
        <div class="card-body">

          <h3 class="card-title mb-4">도서 정보 수정</h3>

          <!-- 제목 (읽기 전용으로 유지) -->
          <div class="mb-3">
            <label class="form-label">제목</label>
            <input type="text" class="form-control" v-model="book.title" />
          </div>

          <!-- 요약 -->
          <div class="mb-3">
            <label class="form-label">요약</label>
            <textarea class="form-control" v-model="book.summary" rows="3" />
          </div>

          <!-- 저자 -->
          <div class="mb-3">
            <label class="form-label">저자</label>
            <input type="text" class="form-control" v-model="book.author" />
          </div>

          <!-- 출판일 -->
          <div class="mb-3">
            <label class="form-label">발행일</label>
            <input type="date" class="form-control" v-model="book.publish_date" />
          </div>

          <!-- 출판사 -->
          <div class="mb-3">
            <label class="form-label">출판사</label>
            <input type="text" class="form-control" v-model="book.publisher" />
          </div>

          <!-- ISBN -->
          <div class="mb-3">
            <label class="form-label">ISBN</label>
            <input type="text" class="form-control" v-model="book.isbn" />
          </div>

          <!-- 버튼 영역 -->
          <div class="d-flex gap-2 mt-4">
            <button class="btn btn-primary" @click="registerBook">
              등록하기
            </button>
            <RouterLink class="btn btn-secondary" to="/">
              취소하기
            </RouterLink>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
</template>
<style>

</style>