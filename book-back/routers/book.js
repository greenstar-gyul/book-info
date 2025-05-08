const express = require("express");
const router = express.Router();
const query = require('../mysql');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images/"));
  },
  filename: (req, file, cb) => {
    const originalFileName = file.originalname.split('.');
    let filename = 'none';
    if (originalFileName.length > 0) {
      filename = `${originalFileName[0]}-${Date.now()}.${originalFileName[1]}`;
    }
    cb(null, filename);
  }
})
const upload = multer({storage});

router.get("", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const size = parseInt(req.query.size) || 12;
  const offset = (page - 1) * size;

  try {
    // console.log("전체 목록 요청");
    const books = await query("selectList", [size, offset]);
    const countResult = await query("count", null);
    const total = countResult[0].total;
    // console.log(result);
    res.send({ books, total });
  }
  catch(err) {
    // console.log(err);
    res.send(err);
  }
});

router.post("", upload.single('file'), async (req, res) => { 
  try {
    const book = JSON.parse(req.body.book);
    console.log("--------");
    console.log(book);
    const file = req.file ? req.file.filename : null;
    book.book_cover = file;
    const result = await query("insertBook", book);
    res.send('추가 완료'); 
  }
  catch(err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res) => { 
  const id = req.params.id;
  try {
    const result = await query("selectById", id);
    console.log(result);
    res.send(result); 
  }
  catch(err) {
    res.send(err);
  }
});

router.put("/:id", upload.single('file'), async (req, res) => {
  const id = req.params.id;
  const summary = req.body.summary;
  const file = req.file ? req.file.filename : null;

  if (!summary) {
    return res.status(400).send("요약 정보가 없습니다.");
  }

  try {
    const data = [summary, file, id]; // file은 null일 수 있음
    const result = await query('updateBook', data);
    res.send("업데이트 완료");
  } catch (err) {
    console.error("DB 업데이트 에러:", err);
    res.status(500).send("서버 에러");
  }
});


router.delete("/:id", async (req, res) => { 
  const id = req.params.id;
  try {
    const result = await query('deleteBook', id);
    res.send('삭제 완료');
  }
  catch(err) {
    res.send(err);
  }
});

module.exports = router;
