// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

console.log('Book Management Application - Week 6');
console.log('=====================================');

// Mulai pengujian di bawah ini

// 1. Import fungsi-fungsi
import { addBook, listBooks, searchBook } from './functions/bookManager';

console.log('--- Memulai Pengujian Aplikasi Buku ---');

// 2. Menguji fungsi addBook
addBook({
  title: 'Bukan Manusia',
  author: 'Jane',
  publicationYear: 2005,
});

addBook({
  title: 'Bumi dan Bulan',
  author: 'John',
  publicationYear: 1980,
});

addBook({
  title: 'Ngoding Seru',
  author: 'Alif',
  publicationYear: 2020,
});

// 3. Menguji fungsi listBooks untuk melihat semua buku
listBooks();

// 4. Menguji fungsi searchBook dengan parameter (mencari buku spesifik)
searchBook('seru');

// 5. Menguji fungsi searchBook tanpa parameter (harus menampilkan semua buku)
searchBook();

// 6. Menguji fungsi searchBook dengan judul yang tidak ada
searchBook('Harry Potter');

console.log('\n--- Pengujian Selesai ---');
