# Yuramedia Docs

Dokumentasi resmi panduan lokalisasi dan terjemahan untuk tim **Yuramedia Link** — dibangun dengan [Fumadocs](https://www.fumadocs.dev) dan Astro.

## 🚀 Menjalankan secara lokal

```bash
bun install
bun dev
```

Buka `http://localhost:4321` di browser.

## 📁 Struktur konten

```
src/content/docs/
├── guides/          # Panduan kerja (terjemahan, format, dll.)
└── reference/       # Glosarium istilah dan sumber tambahan
```

Setiap file `.md` atau `.mdx` di dalam folder tersebut otomatis menjadi halaman di situs.

## ✍️ Berkontribusi

Cara tercepat: klik **"Edit halaman ini"** di halaman mana saja untuk langsung mengedit via GitHub.

Untuk kontribusi lebih besar, baca [CONTRIBUTING.md](./CONTRIBUTING.md).

## 🧞 Perintah

| Perintah      | Aksi                                    |
| :------------ | :-------------------------------------- |
| `bun install` | Install dependencies                    |
| `bun dev`     | Jalankan dev server di `localhost:4321` |
| `bun build`   | Build ke `./dist/`                      |
| `bun preview` | Preview hasil build secara lokal        |
| `bun lint`    | Jalankan linter (oxlint)                |
| `bun format`  | Format semua file                       |

## 📄 Lisensi

Lihat [LICENSE](./LICENSE).
