---
title: Panduan Quality Control (QC)
description: Panduan proses review subtitle sebelum rilis — mencakup alur kerja QC, checklist lengkap, cara memberi catatan, dan kriteria kelulusan.
sidebar:
  order: 11
---

QC (*Quality Control*) adalah tahap review akhir sebelum subtitle dikirim atau diterbitkan. Tujuannya adalah menangkap error yang lolos dari proses penerjemahan — baik teknis maupun konten — sehingga penonton tidak menemukan masalah di hasil akhir.

:::caution[QC bukan tugas penerjemah]
QC idealnya dilakukan oleh orang yang berbeda dari penerjemah file tersebut. Penerjemah cenderung tidak melihat kesalahannya sendiri karena sudah terbiasa dengan teks yang sama.
:::

---

## 1. Posisi QC dalam Alur Kerja

```
Terjemahan → Timing → [QC] → Revisi → Rilis
```

QC dilakukan **setelah timing selesai** dan **sebelum file dikirim ke platform**. Jika QC menemukan error, file dikembalikan ke penerjemah atau timer untuk direvisi, lalu QC diulang pada bagian yang berubah.

---

## 2. Persiapan Sebelum QC

Pastikan kamu memiliki semua ini sebelum mulai:

| Yang dibutuhkan | Keterangan |
| --- | --- |
| File `.ass` yang akan di-review | File dari penerjemah/timer |
| File video asli | Untuk mencocokkan subtitle dengan audio dan visual |
| Aegisub (fork arch1t3cht) | Lihat [Panduan Aegisub](/guides/panduan-aegisub/) untuk instalasi |
| Glosarium proyek | Nama tokoh, tempat, istilah yang sudah disepakati |
| Panduan terjemahan | [Panduan Serial Pendek — Cina ke Indonesia](/guides/panduan-terjemahan-serial-pendek-cina-ke-indonesia/) |

Buka video dan file `.ass` bersamaan di Aegisub. Jangan review tanpa video — banyak error timing dan konteks tidak akan terlihat hanya dari teks.

---

## 3. Alur Kerja QC

1. **Tonton dari awal hingga akhir** sambil membaca subtitle di layar. Catat nomor baris yang terasa janggal — jangan langsung diperbaiki.
2. **Buka Subtitle Grid** dan periksa secara sistematis menggunakan checklist di bagian 4.
3. **Tulis catatan** untuk setiap masalah yang ditemukan (lihat bagian 5).
4. **Kirim catatan** ke penerjemah/timer. Jangan mengubah file secara langsung kecuali kamu ditunjuk sebagai QC editor.
5. **Review ulang** bagian yang direvisi setelah penerjemah mengirim file baru.

---

## 4. Checklist QC

Gunakan checklist ini secara berurutan. Tandai setiap poin setelah diperiksa.

### 4.1 Teknis

Periksa di Subtitle Grid Aegisub. Beberapa masalah ini bisa dilihat sekaligus di kolom waktu.

| # | Yang diperiksa | Standar |
| --- | --- | --- |
| T1 | Tidak ada baris dengan teks kosong | Hapus baris kosong atau isi |
| T2 | Tidak ada overlap timing | Dua baris tidak boleh tayang bersamaan kecuali format dua speaker |
| T3 | Durasi setiap baris ≥ 800 ms | Baris terlalu singkat tidak sempat dibaca |
| T4 | Jeda antarbaris ≥ 83 ms | Minimum 2 frame di 24fps |
| T5 | Subtitle tidak melewati batas scene change | Subtitle harus selesai sebelum potongan gambar |
| T6 | File tersimpan sebagai `.ass` | Jangan konversi ke `.srt` kecuali diminta |
| T7 | Tidak ada spasi ganda di dalam teks | `Ctrl+F` → cari dua spasi |
| T8 | Tidak ada karakter Mandarin di teks final | `Ctrl+F` → paste karakter Cina untuk tes |
| T9 | Tidak ada kode tag yang rusak atau tidak ditutup | Misal `{\i1}` tanpa `{\i0}` |

:::tip[Cara cepat cek overlap di Aegisub]
**Timing → Check Subtitle Consistency** → centang *Overlap with next subtitle*. Aegisub akan menandai semua baris yang bermasalah sekaligus.
:::

---

### 4.2 Format Teks

Merujuk ke [Panduan Format → Format Subtitle](/guides/panduan-terjemahan-serial-pendek-cina-ke-indonesia/#format-subtitle).

| # | Yang diperiksa | Standar |
| --- | --- | --- |
| F1 | Maksimal 2 baris per tampilan | Lebih dari 2 baris menutupi layar |
| F2 | Maksimal 25 karakter per baris | Hitung manual atau gunakan fitur karakter Aegisub |
| F3 | Dialog terpotong menggunakan `-` di akhir | `Dia udah meninggal-` |
| F4 | Dialog dua orang: `-` di awal setiap baris | `-Kamu ke mana?` / `-Mall` |
| F5 | Lirik lagu menggunakan `♪` di awal dan akhir | `♪ Rasa sayang ♪` |
| F6 | Teks layar / keterangan menggunakan `(…)` | `(Setelah 3 tahun)` |
| F7 | Narasi / suara hati | **Dracin:** `(…)` + italic (`{\i1}(Semoga...){\i0}`) / **Proyek lain:** italic saja (`{\i1}Semoga...{\i0}`) |
| F8 | Tanda baca Indonesia, bukan Mandarin | Tidak ada `。`, `，`, `！`, `？` |
| F9 | Satuan sudah dikonversi ke satuan Indonesia | `9 kg` bukan `18 斤`, `1.000 km` bukan `1000 公里` |
| F10 | Desimal menggunakan koma, ribuan menggunakan titik | `1,7 meter`, `Rp 16.000.000` |

---

### 4.3 Terjemahan & Lokalisasi

Merujuk ke [Panduan Terjemahan — Bagian 1 s.d. 2](/guides/panduan-terjemahan-serial-pendek-cina-ke-indonesia/).

| # | Yang diperiksa | Standar |
| --- | --- | --- |
| L1 | Tidak ada teks yang terasa seperti hasil mesin | Kaku, tidak natural, struktur kalimat asing |
| L2 | Nama tokoh tidak menggunakan transliterasi pinyin | `Vivian Roesli` bukan `Gu Weiwei` |
| L3 | Nama depan maks 3 suku kata, belakang maks 3 suku kata | `Sinta Hartono`, bukan `Anatasya Kusumawardani` |
| L4 | Nama tempat & institusi sudah dilokal | Periksa apakah ada nama tempat Mandarin yang tersisa |
| L5 | Merek dan judul karya sesuai panduan | Cek [Bagian 2.3](/guides/panduan-terjemahan-serial-pendek-cina-ke-indonesia/#23-merek) dan [2.4](/guides/panduan-terjemahan-serial-pendek-cina-ke-indonesia/#24-judul-karya-film-game-musik-sastra) |
| L6 | Makna terjemahan akurat dan tidak melenceng dari konteks | Tonton ulang adegan jika ragu |
| L7 | Tidak ada terjemahan kata per kata yang tidak natural | Cek kalimat yang terasa terlalu harfiah |
| L8 | Kata ganti sesuai konteks dan hierarki tokoh | `aku/kamu` vs `saya/Anda` — lihat [Bagian 4](/guides/panduan-terjemahan-serial-pendek-cina-ke-indonesia/#4-catatan-penting) |

---

### 4.4 Konsistensi

| # | Yang diperiksa | Cara periksa |
| --- | --- | --- |
| K1 | Nama tokoh konsisten dari baris pertama hingga terakhir | `Ctrl+F` → cari variasi penulisan |
| K2 | Panggilan dan gelar konsisten per hubungan tokoh | Misal: selalu "Kak Arwan", bukan bergantian "Mas Arwan" |
| K3 | Register bahasa konsisten per pasangan tokoh | Jika di adegan 1 pakai `aku/kamu`, adegan 10 tidak boleh tiba-tiba `saya/Anda` |
| K4 | Istilah genre (Xianxia, Historical, dll.) sesuai glosarium | Cek [Panduan Lokalisasi Istilah](/reference/istilah/) |
| K5 | Judul karya, nama merek, mata uang konsisten sepanjang file | — |

---

### 4.5 Konten Sensitif & Kepatuhan Hukum

Merujuk ke [Bagian 2.1.4](/guides/panduan-terjemahan-serial-pendek-cina-ke-indonesia/#tokoh--sebutan-sensitif) dan [Bagian 5](/guides/panduan-terjemahan-serial-pendek-cina-ke-indonesia/#5-kepatuhan-hukum--regulasi).

| # | Yang diperiksa | Standar |
| --- | --- | --- |
| S1 | Konten SARA (ras, suku, agama, antargolongan) sudah disanetkan | Samarkan atau hapus |
| S2 | Diskriminasi gender / orientasi seksual sudah diadaptasi | Hapus atau netralkan |
| S3 | Nama tokoh sejarah atau politik yang sensitif sudah dihapus | Misal: nama pemimpin, tokoh kontroversial |
| S4 | Judul karya berpotensi pelanggaran hak cipta sudah diganti | Misal: game, film, lagu yang muncul banyak |
| S5 | Tidak ada konten yang melanggar regulasi konten Indonesia | Rujuk dokumen internal Fizzo apabila relevan |

---

## 5. Cara Memberi Catatan

Tulis catatan dalam format yang mudah ditindaklanjuti oleh penerjemah. Gunakan format berikut:

```
[Nomor baris] | [Kategori] | [Masalah] | [Saran perbaikan]
```

**Contoh:**

```
Baris 47  | T2 (Overlap)     | Overlap dengan baris 48, selisih hanya 40ms     | Geser end baris 47 ke 00:03:12.150
Baris 83  | F2 (Karakter)    | "Aku tidak mau kamu pergi sekarang" = 37 karakter | Pisah jadi 2 baris
Baris 102 | L2 (Nama)        | "Zhang Wei" — masih pakai pinyin                | Ganti sesuai glosarium proyek
Baris 155 | K3 (Konsistensi) | Tiba-tiba pakai "saya" padahal sebelumnya "aku"  | Kembalikan ke "aku"
```

### Tingkat prioritas catatan

| Prioritas | Kapan digunakan | Wajib diperbaiki? |
| --- | --- | --- |
| **Wajib** | Error teknis, konten sensitif, nama salah, makna melenceng | ✅ Ya |
| **Saran** | Pilihan kata yang bisa lebih natural, tapi makna tetap benar | ⬜ Opsional |

Beri label prioritas di setiap catatan agar penerjemah tahu mana yang harus diselesaikan dulu.

---

## 6. Kriteria Kelulusan

| Status | Kondisi | Tindakan |
| --- | --- | --- |
| ✅ **Lulus** | Tidak ada error *Wajib* | File siap dikirim ke platform |
| 🔄 **Revisi Minor** | 1–5 catatan *Wajib*, tidak ada di kategori T, S | Perbaiki, kirim ulang ke QC untuk verifikasi cepat |
| ⚠️ **Revisi Mayor** | Error di kategori teknis (T) atau konten sensitif (S), atau > 5 catatan *Wajib* | Kembalikan ke penerjemah, QC penuh diulang setelah revisi |
| ❌ **Gagal** | Error sistemis: tanda baca Mandarin masif, banyak karakter Cina tersisa, terjemahan mesin nyata, nama tokoh tidak dilokal sama sekali | Kembalikan seluruh file untuk pengerjaan ulang |

:::caution[Satu error S otomatis Revisi Mayor]
Satu saja error di kategori **Konten Sensitif (S)** langsung naik ke Revisi Mayor, terlepas dari jumlah total catatan. Konten sensitif yang lolos ke rilis berpotensi menimbulkan masalah hukum.
:::

---

## Lihat Juga

- [Panduan Terjemahan Serial Pendek — Cina ke Indonesia](/guides/panduan-terjemahan-serial-pendek-cina-ke-indonesia/) — semua aturan yang dirujuk checklist ini
- [Panduan Aegisub](/guides/panduan-aegisub/) — cara menggunakan tools untuk QC teknis
- [Panduan Timing](/guides/panduan-timing/) — standar teknis timing yang dirujuk checklist T2–T5
- [Teknis & Encoding](/guides/panduan-teknis-encoding/) — spesifikasi file .ass, encoding UTF-8, tag, dan penamaan file
- [Panduan Lokalisasi Istilah](/reference/istilah/) — glosarium untuk cek konsistensi
