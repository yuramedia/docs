---
title: Panduan Penggunaan Aegisub
description: Panduan praktis menggunakan Aegisub untuk mengedit, timing, dan mengekspor subtitle dalam alur kerja lokalisasi Yuramedia Link.
---

Aegisub adalah software editor subtitle utama yang digunakan di Yuramedia Link. Halaman ini mencakup instalasi, pengenalan antarmuka, alur kerja dasar, hingga referensi shortcut.

:::tip[Versi yang direkomendasikan]
Gunakan **fork arch1t3cht** — bukan versi resmi. Fork ini lebih aktif dikembangkan dan mendukung format video modern yang sering dipakai dalam proyek lokalisasi serial Tiongkok.
:::

---

## 1. Instalasi

### Versi arch1t3cht (direkomendasikan)

1. Buka halaman rilis: [github.com/arch1t3cht/Aegisub/releases](https://github.com/arch1t3cht/Aegisub/releases)
2. Unduh file installer sesuai sistem operasi:
   - **Windows** → `.exe`
   - **macOS** → `.dmg`
3. Jalankan installer dan ikuti instruksinya.

### Versi resmi (alternatif)

Tersedia di [aegisub.org](https://aegisub.org/) — gunakan ini hanya jika fork arch1t3cht tidak bisa dijalankan di perangkatmu.

:::caution
Versi resmi tidak lagi menerima pembaruan aktif. Beberapa format video dan fitur audio mungkin tidak berfungsi dengan baik.
:::

---

## 2. Mengenal Antarmuka

Setelah membuka Aegisub, tampilan dibagi menjadi empat area utama:

```
┌─────────────────────────────────────┐
│           Video Player              │  ← Area A
├─────────────────────────────────────┤
│           Audio Waveform            │  ← Area B
├─────────────────────────────────────┤
│  Subtitle Grid (daftar semua baris) │  ← Area C
├─────────────────────────────────────┤
│       Edit Box (teks aktif)         │  ← Area D
└─────────────────────────────────────┘
```

| Area | Nama | Fungsi |
| --- | --- | --- |
| A | Video Player | Pratinjau subtitle di atas video secara real-time |
| B | Audio Waveform | Atur titik masuk dan keluar subtitle dengan presisi |
| C | Subtitle Grid | Daftar semua baris subtitle; klik baris untuk memilih |
| D | Edit Box | Ketik atau ubah teks baris yang sedang aktif |

---

## 3. Membuka File

### Membuka video

Pilih **Video → Open Video**, lalu pilih file video proyekmu.

:::note
Format video yang umum digunakan: `.mp4`, `.mkv`. Jika video tidak terbuka, coba instal [LAV Filters](https://github.com/Nevcairiel/LAVFilters/releases) (Windows) sebagai decoder tambahan.
:::

### Membuka file subtitle

Pilih **File → Open Subtitles**, lalu pilih file `.ass` atau `.srt`.

Untuk membuat subtitle baru dari nol, pilih **File → New Subtitles**.

### Membuka keduanya sekaligus

Aegisub bisa membuka video dan subtitle bersamaan. Urutan yang disarankan:
1. Buka video terlebih dahulu.
2. Buka file subtitle — Aegisub akan otomatis menyinkronkan posisi ke video.

---

## 4. Timing Subtitle

Timing adalah proses menentukan kapan sebuah baris muncul dan menghilang di layar.

### Menggunakan Audio Waveform

Cara paling presisi untuk timing adalah melalui **Audio Waveform** (Area B):

1. Klik baris yang ingin di-timing di Subtitle Grid.
2. Di Audio Waveform, seret **penanda merah kiri** untuk mengatur titik masuk (*start*).
3. Seret **penanda merah kanan** untuk mengatur titik keluar (*end*).
4. Tekan `Ctrl+S` untuk menyimpan perubahan pada baris tersebut dan lanjut ke baris berikutnya.

### Menggunakan tombol di Edit Box

Di bawah Edit Box terdapat dua kolom waktu:
- **Start** — waktu baris muncul, format `0:00:00.00`
- **End** — waktu baris menghilang

Klik langsung pada angkanya untuk mengubah secara manual.

### Snap to video frame

Tekan `Ctrl+1` atau `Ctrl+2` untuk menyetel waktu *start* atau *end* ke frame video yang sedang aktif. Ini berguna untuk sinkronisasi dengan potongan dialog.

### Aturan timing yang wajib diikuti

| Aturan | Nilai |
| --- | --- |
| Durasi minimum per baris | 800 ms |
| Jeda antarbaris | minimal 83 ms (2 frame di 24fps) |
| Subtitle tidak boleh melewati batas adegan (*scene change*) | — |

---

## 5. Mengedit Teks Subtitle

### Cara mengedit

1. Klik baris yang ingin diedit di Subtitle Grid.
2. Teks baris aktif akan muncul di Edit Box (Area D).
3. Klik di dalam Edit Box dan ketik perubahanmu.
4. Tekan `Enter` untuk pindah ke baris berikutnya, atau klik baris lain di Grid.

### Baris baru dalam satu subtitle

Gunakan `\N` (huruf besar) untuk memaksa ganti baris dalam satu baris subtitle:

```
Aku tahu kamu ada di sini.\NDan aku tidak akan pergi.
```

Hasilnya di layar:
```
Aku tahu kamu ada di sini.
Dan aku tidak akan pergi.
```

:::caution
Hindari lebih dari dua baris dalam satu subtitle. Tiga baris ke atas akan menutupi terlalu banyak area layar.
:::

### Tag format dasar (khusus file .ASS)

| Tag | Efek | Contoh penggunaan |
| --- | --- | --- |
| `{\i1}` … `{\i0}` | Miring (*italic*) | Suara hati, narasi, lagu |
| `{\b1}` … `{\b0}` | Tebal (*bold*) | Penekanan kuat |
| `{\an8}` | Posisi atas tengah | Subtitle untuk speaker luar layar |
| `{\pos(x,y)}` | Posisi kustom | Menempatkan subtitle di koordinat tertentu |

Contoh penggunaan italic untuk suara hati:
```
{\i1}(Semoga dia baik-baik saja.){\i0}
```

---

## 6. Format File Subtitle

### .ASS vs .SRT

| Fitur | .ASS | .SRT |
| --- | --- | --- |
| Styling (font, warna, posisi) | ✅ Didukung penuh | ❌ Tidak didukung |
| Tag format (`\i`, `\b`, `\an`) | ✅ Ya | ❌ Tidak |
| Kompatibilitas platform | Terbatas (media player tertentu) | Sangat luas |
| Digunakan di Yuramedia | ✅ Format utama | Hanya untuk ekspor khusus |

**Gunakan .ASS** untuk semua file kerja internal. Konversi ke .SRT hanya jika diminta secara spesifik.

### Menyimpan file

- **Simpan** → `Ctrl+S` (menyimpan ke file yang sama)
- **Simpan sebagai** → `Ctrl+Shift+S` (untuk membuat salinan dengan nama baru)

Aegisub menyimpan dalam format `.ass` secara default. Jangan ubah ke format lain kecuali diminta.

---

## 7. Referensi Shortcut Keyboard

### Navigasi

| Shortcut | Fungsi |
| --- | --- |
| `↑` / `↓` | Pindah ke baris sebelum/sesudah di Grid |
| `Ctrl+G` | Lompat ke nomor baris tertentu |
| `Ctrl+F` | Cari teks di semua subtitle |
| `Ctrl+H` | Cari dan ganti teks |

### Playback & Timing

| Shortcut | Fungsi |
| --- | --- |
| `Space` | Play/pause di Audio Waveform |
| `Ctrl+1` | Set waktu *start* ke frame saat ini |
| `Ctrl+2` | Set waktu *end* ke frame saat ini |
| `Ctrl+3` | Play baris aktif saja |
| `A` / `S` | Geser *start* mundur/maju 10 ms |
| `D` / `F` | Geser *end* mundur/maju 10 ms |
| `Q` / `W` | Geser *start* mundur/maju 1 frame |
| `E` / `R` | Geser *end* mundur/maju 1 frame |

### Edit

| Shortcut | Fungsi |
| --- | --- |
| `Enter` | Konfirmasi edit, pindah ke baris berikutnya |
| `Ctrl+D` | Hapus baris aktif |
| `Ctrl+Insert` | Tambah baris baru setelah baris aktif |
| `Ctrl+Z` | Undo |
| `Ctrl+Y` | Redo |

---

## 8. Tips & Hal yang Perlu Dihindari

### ✅ Yang harus dilakukan

- Selalu buka video bersama file subtitle agar bisa langsung memeriksa hasil di layar.
- Gunakan Audio Waveform untuk timing — lebih presisi daripada mengetik waktu manual.
- Simpan secara berkala dengan `Ctrl+S`.
- Backup file `.ass` sebelum melakukan perubahan massal (Find & Replace, shift timing).

### ❌ Yang harus dihindari

- Jangan gunakan spasi ganda antar kata — Aegisub tidak memperingatkan ini.
- Jangan biarkan baris dengan teks kosong — hapus atau isi.
- Jangan simpan dalam format `.srt` jika file mengandung tag `.ass` — tag akan hilang.
- Jangan lupa cek *overlap* antar baris: dua baris yang timing-nya tumpang tindih akan menyebabkan subtitle berkedip.

---

## Lihat Juga

- [Sumber Tambahan](/reference/sumber-tambahan/) — tautan ke Netflix Style Guide dan standar subtitle lainnya
- [Teknis & Encoding](/guides/panduan-teknis-encoding/) — spesifikasi file .ass, encoding UTF-8, Script Info, Style, dan konvensi penamaan file
- [Panduan Terjemahan Serial Pendek — Cina ke Indonesia](/guides/panduan-terjemahan-serial-pendek-cina-ke-indonesia/) — aturan teks dan lokalisasi
