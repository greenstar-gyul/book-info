const express = require("express");
const router = express.Router();
const query = require('../mysql');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../public/images/');
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
const upload = multer({storage:storage});

router.get("", async (req, res) => {
  try {
    // console.log("전체 목록 요청");
    const result = await query("selectList", null);
    // console.log(result);
    res.send(result);
  }
  catch(err) {
    // console.log(err);
    res.send(err);
  }
});

router.post("", async (req, res) => { 
  try {
    const result = await query("insertBook", req.body);
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

router.put("/:id", async (req, res) => { 


  const id = req.params.id;
  const book = req.query;
  console.log(book);
  const data = [book.summary, book.file, id];
  try {
    const result = await query('updateBook', data);
    res.send('업데이트 완료');
  }
  catch (err) {
    res.send(err);
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
