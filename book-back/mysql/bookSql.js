const sqllist = {
  selectList: "SELECT * FROM books",
  selectById: "SELECT * FROM books WHERE id = ?",
  insertBook: "INSERT books SET ?",
  updateBook: "UPDATE books SET summary = ?, book_cover = ? WHERE id = ?",
  deleteBook: "DELETE FROM books WHERE id = ?"
}

module.exports = sqllist;