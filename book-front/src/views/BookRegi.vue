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
const file = ref('');
const previewImage = ref(null);

function setFile(event) {
  file.value = event.target.files[0];
  if (file.value) {
    previewImage.value = URL.createObjectURL(file.value);
  }
}

const registerBook = async function() {
  // let formData = new FormData(); 
  // formData.append("file", file.value);
  let formData = new FormData(); // formData 객체를 생성한다.

  formData.append("file", file.value);
  formData.append("book", JSON.stringify(book.value));

  const result = await axios.post(`/api/book`, formData, { headers: {"Content-Type": "multipart/form-data"}, });
  router.push(`/`);
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

          <!-- 도서 표지 등록 -->
          <div class="mb-3">
            <label class="form-label">도서 표지 업로드</label>
            <input type="file" class="form-control" @change="setFile" accept="image/*" />
            <div v-if="previewImage" class="mt-3 text-center">
              <img :src="`${previewImage}`" alt="도서 표지 미리보기" class="img-thumbnail" style="max-height: 200px;" />
            </div>
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