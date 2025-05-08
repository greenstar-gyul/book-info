const sqllist = {
  selectList: "SELECT * FROM books ORDER BY id DESC LIMIT ? OFFSET ?",
  selectById: "SELECT * FROM books WHERE id = ?",
  insertBook: "INSERT books SET ?",
  updateBook: "UPDATE books SET summary = ?, book_cover = ? WHERE id = ?",
  deleteBook: "DELETE FROM books WHERE id = ?",
  count: "SELECT COUNT(*) AS total FROM books"
}

module.exports = sqllist;