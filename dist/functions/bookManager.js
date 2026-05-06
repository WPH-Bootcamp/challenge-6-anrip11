"use strict";
// Tugas 3: Implementasikan fungsi-fungsi manajemen buku
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBook = exports.listBooks = exports.addBook = void 0;
const books_1 = require("../data/books");
/**
 * Fungsi untuk menambahkan buku ke dalam array
 * Menerima parameter bertipe Book dan menampilkan pesan konfirmasi
 */
const addBook = (newBook) => {
    books_1.books.push(newBook);
    console.log(`Berhasil menambahkan buku: "${newBook.title}" oleh ${newBook.author}`);
};
exports.addBook = addBook;
/**
 * Fungsi untuk menampilkan semua buku dalam array
 * Menampilkan data dengan format yang jelas
 */
const listBooks = () => {
    console.log('\n=== Daftar Seluruh Buku ===');
    if (books_1.books.length === 0) {
        console.log('Belum ada buku yang tersimpan.');
    }
    else {
        books_1.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`);
        });
    }
};
exports.listBooks = listBooks;
/**
 * Fungsi untuk mencari buku berdasarkan judul (opsional)
 * Jika parameter tidak diberikan, akan menampilkan semua buku
 */
const searchBook = (title) => {
    console.log(`\n=== Hasil Pencarian: ${title || 'Semua Buku'} ===`);
    if (!title) {
        (0, exports.listBooks)();
        return;
    }
    const filteredBooks = books_1.books.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()));
    if (filteredBooks.length === 0) {
        console.log(`Buku dengan judul "${title}" tidak ditemukan.`);
    }
    else {
        filteredBooks.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`);
        });
    }
};
exports.searchBook = searchBook;
