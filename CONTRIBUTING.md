# Panduan Berkontribusi

Terima kasih sudah ingin berkontribusi ke dokumentasi Yuramedia Link! Panduan ini menjelaskan cara menambahkan atau memperbaiki konten.

## Cara cepat

Cara paling mudah untuk berkontribusi adalah lewat tombol **"Edit halaman ini"** yang tersedia di setiap halaman dokumentasi. Tombol ini akan membuka editor langsung di GitHub.

## Kontribusi lewat GitHub

Jika ingin perubahan yang lebih besar:

1. Fork repositori ini.
2. Buat branch baru: `git checkout -b tambah-istilah-baru`
3. Lakukan perubahan pada file di `src/content/docs/`.
4. Push dan buat *pull request* ke branch `main`.

## Menambah istilah baru

Istilah baru ditambahkan di `src/content/docs/reference/Istilah.mdx`.

Format tabel:

```
| Istilah Asli | Terjemahan / Lokalisasi | Catatan |
| --- | --- | --- |
| Contoh | Terjemahan | Catatan jika perlu |
```

Pastikan istilah dimasukkan ke tab yang tepat (Umum, Isekai, Xianxia, Romansa, dll.).

## Menambah panduan baru

1. Buat file `.md` atau `.mdx` baru di `src/content/docs/guides/`.
2. Sertakan frontmatter minimal:

```yaml
---
title: Judul Panduan
description: Deskripsi singkat.
---
```

3. Tambahkan entri di `sidebar` di file `astro.config.mjs`.

## Aturan penulisan

- Tulis dalam bahasa Indonesia yang baku dan natural.
- Gunakan contoh konkret bila memungkinkan.
- Jangan tambahkan opini pribadi — hanya aturan dan referensi yang sudah disepakati tim.
- Jika ragu, diskusikan di GitHub Issues sebelum membuat perubahan besar.

## Menjalankan dokumentasi secara lokal

```bash
bun install
bun dev
```

Buka `http://localhost:4321` di browser.
