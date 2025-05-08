<script setup>
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const bookId = ref('');
const book = ref('');

const loadBook = async function() {
  bookId.value = route.params.id;
  console.log(bookId.value);
  const result = await axios.get(`/api/book/${bookId.value}`);
  book.value = await result.data[0];
}

onMounted(() => {
  loadBook();
})

watch(() => route.fullPath, () => {
  loadAllBooks();
});

</script>
<template>
<div class="container mt-5" v-if="book">
  <div class="row justify-content-center">
    <div class="col-md-10">
      <div class="card shadow-sm p-3">
        <div class="row g-4 align-items-center">

          <!-- 책 표지 -->
          <div class="col-md-4 text-center">
            <img
              :src="'/api/images/' + book.book_cover"
              alt="책 표지"
              class="img-fluid rounded shadow-sm"
              style="max-height: 280px;"
            />
          </div>

          <!-- 책 정보 -->
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title mb-3 fw-bold">{{ book.title }}</h3>

              <p class="card-text text-muted" style="min-height: 80px;">
                {{ book.summary }}
              </p>

              <ul class="list-group list-group-flush mb-4">
                <li class="list-group-item"><strong>저자:</strong> {{ book.author }}</li>
                <li class="list-group-item"><strong>발행일:</strong> {{ book.publish_date }}</li>
                <li class="list-group-item"><strong>출판사:</strong> {{ book.publisher }}</li>
                <li class="list-group-item"><strong>ISBN:</strong> {{ book.isbn }}</li>
              </ul>

              <div class="d-flex gap-2">
                <RouterLink class="btn btn-outline-secondary" to="/">
                  ← 목록으로 돌아가기
                </RouterLink>
                <RouterLink class="btn btn-primary" :to="`/book/update/${book.id}`">
                  도서 수정
                </RouterLink>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
</template>
<style>

</style>