// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan

// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca

// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

import { Book } from '../types';
import { books } from '../data/books';

// Fungsi addBook (menambahkan buku baru ke dalam koleksi)
export const addBook = (newBook: Book): void => {
  books.push(newBook);
  console.log(
    `Berhasil menambahkan buku: "${newBook.title}" oleh ${newBook.author}`
  );
};

// Fungsi listBooks (menampilkan semua buku yang tersimpan)
export const listBooks = (): void => {
  console.log('\n=== Daftar Seluruh Buku ===');
  if (books.length === 0) {
    console.log('Belum ada buku yang tersimpan.');
  } else {
    books.forEach((book, index) => {
      console.log(
        `${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`
      );
    });
  }
};

// Fungsi searchBook (mencari buku berdasarkan judul)
export const searchBook = (title?: string): void => {
  console.log(`\n=== Hasil Pencarian: ${title || 'Semua Buku'} ===`);

  if (!title) {
    listBooks();
    return;
  }

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );

  if (filteredBooks.length === 0) {
    console.log(`Buku dengan judul "${title}" tidak ditemukan.`);
  } else {
    filteredBooks.forEach((book, index) => {
      console.log(
        `${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`
      );
    });
  }
};
