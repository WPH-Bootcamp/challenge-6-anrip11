"use strict";
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Book Management Application - Week 6');
console.log('=====================================');
// Mulai pengujian di bawah ini
// src/main.ts
const bookManager_1 = require("./functions/bookManager");
console.log('--- Memulai Pengujian Aplikasi Buku ---');
// 1. Menguji fungsi addBook
(0, bookManager_1.addBook)({
    title: 'Bukan Manusia',
    author: 'Jane',
    publicationYear: 2005,
});
(0, bookManager_1.addBook)({
    title: 'Bumi dan Bulan',
    author: 'John',
    publicationYear: 1980,
});
(0, bookManager_1.addBook)({
    title: 'Ngoding Seru',
    author: 'Alif',
    publicationYear: 2020,
});
// 2. Menguji fungsi listBooks untuk melihat semua buku
(0, bookManager_1.listBooks)();
// 3. Menguji fungsi searchBook dengan parameter (mencari buku spesifik)
(0, bookManager_1.searchBook)('seru');
// 4. Menguji fungsi searchBook tanpa parameter (harus menampilkan semua buku)
(0, bookManager_1.searchBook)();
// 5. Menguji fungsi searchBook dengan judul yang tidak ada
(0, bookManager_1.searchBook)('Harry Potter');
console.log('\n--- Pengujian Selesai ---');
