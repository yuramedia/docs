---
title: Panduan Timing Subtitle
description: Panduan teknis proses timing subtitle di Yuramedia Link — standar durasi dan jeda, cara membaca scene change, kecepatan baca, penanganan kasus khusus, dan checklist sebelum submit.
sidebar:
  order: 8
---

Timing adalah proses menentukan kapan setiap baris subtitle muncul dan menghilang di layar, selaras dengan audio dan potongan gambar. Tujuannya bukan sekadar "subtitle terlihat" — melainkan penonton bisa membaca dengan nyaman tanpa harus berhenti menikmati visual.

:::caution[Timing yang buruk merusak penonton yang tidak mengerti masalahnya]
Penonton jarang menyadari timing yang salah. Mereka hanya merasa lelah membaca, sering ketinggalan, atau subtitle terasa terburu-buru. Mereka akan menyalahkan terjemahan — padahal masalahnya ada di timing.
:::

---

## 1. Posisi Timing dalam Alur Kerja

```
Terjemahan → [Timing] → QC → Revisi → Rilis
```

Timing dilakukan **setelah teks terjemahan selesai** dan **sebelum masuk QC**. File yang masuk ke tahap QC harus sudah memiliki timing yang benar — bukan timing kasar yang dibiarkan untuk "diperbaiki nanti".

### Siapa yang mengerjakan timing?

Di Yuramedia Link, timing bisa dikerjakan oleh:
- **Penerjemah** yang juga bertanggung jawab atas timing file-nya sendiri, atau
- **Timer terpisah** yang ditugaskan koordinator untuk menangani timing dari file terjemahan mentah.

Konfirmasi ke koordinator di awal proyek siapa yang mengerjakan timing.

---

## 2. Standar Teknis Wajib

Ini adalah angka minimum yang berlaku di semua proyek tanpa pengecualian. QC akan menolak file yang tidak memenuhi standar ini.

| Standar | Nilai | Kode QC |
| --- | --- | --- |
| Durasi minimum per baris | **800 ms** | T3 |
| Jeda minimum antarbaris | **83 ms** (2 frame di 24fps) | T4 |
| Overlap antarbaris | **Dilarang** (kecuali format dua speaker) | T2 |
| Subtitle melewati scene change | **Dilarang** | T5 |
| Durasi maksimum per baris | Tidak ada batasan kaku — ikuti audio | — |

:::tip[Cara mudah mengingat angka 83 ms]
83 ms ≈ 2 frame di video 24fps. Dua baris yang terlalu berdekatan akan membuat subtitle terasa berkedip — otak tidak sempat memproses jeda antara dua kalimat berbeda.
:::

---

## 3. Persiapan Sebelum Timing

Pastikan semua ini tersedia sebelum mulai:

| Yang dibutuhkan | Keterangan |
| --- | --- |
| File `.ass` hasil terjemahan | Pastikan teks sudah final — timing di atas teks yang masih berubah harus diulang |
| File video resolusi penuh | Untuk mendeteksi scene change dan mencocokkan lip-sync |
| Aegisub (fork arch1t3cht) | Lihat [Panduan Aegisub](/guides/panduan-aegisub/) untuk instalasi |
| Headphone atau speaker yang jelas | Detail audio kecil (jeda napas, bunyi bibir) penting untuk timing presisi |

Buka video dan file `.ass` bersamaan di Aegisub sebelum mulai. Jangan lakukan timing hanya dari teks tanpa video.

---

## 4. Konsep Dasar: Start, End, dan Durasi

Setiap baris subtitle memiliki tiga nilai waktu:

- **Start** — kapan baris muncul di layar
- **End** — kapan baris menghilang
- **Durasi** — selisih antara End dan Start

```
Start: 0:01:23.45   End: 0:01:25.80   Durasi: 2350 ms
```

Idealnya, **Start mengikuti kapan karakter mulai bicara** dan **End mengikuti kapan karakter selesai bicara** — dengan sedikit buffer di kedua ujungnya.

---

## 5. Alur Kerja Timing

### Langkah-langkah dasar

1. **Buka semua file** — video, lalu file `.ass`, di Aegisub.
2. **Pilih baris pertama** di Subtitle Grid.
3. **Putar video** hingga karakter mulai bicara.
4. **Set Start** dengan menyeret penanda kiri di Audio Waveform, atau tekan `Ctrl+1` saat frame yang tepat.
5. **Set End** dengan menyeret penanda kanan, atau tekan `Ctrl+2` setelah karakter selesai bicara.
6. **Dengarkan ulang** dengan `Ctrl+3` — subtitle hanya memutar baris aktif. Pastikan muncul dan hilang di waktu yang tepat.
7. **Simpan dan lanjut** ke baris berikutnya.

### Buffer awal dan akhir

Jangan set Start tepat di frame pertama karakter membuka mulut. Berikan buffer agar mata penonton siap:

| Posisi | Buffer yang dianjurkan |
| --- | --- |
| Start (sebelum dialog dimulai) | 80–150 ms sebelum karakter bicara |
| End (setelah dialog selesai) | 80–200 ms setelah karakter selesai |

Buffer yang terlalu kecil membuat subtitle terasa tiba-tiba. Buffer yang terlalu besar membuat subtitle terlihat setelah karakter sudah lama diam — sama janggalnya.

### Prioritas: Audio atau visual?

**Ikuti audio.** Gerakan bibir (lip-sync) di serial Tiongkok sering tidak persis sinkron dengan dialog asli karena dubbing ulang. Telingamu lebih bisa diandalkan daripada mulut karakter di layar.

Pengecualian: jika dialog ada di latar belakang dan tidak jelas di audio, gunakan gerakan bibir sebagai panduan.

---

## 6. Scene Change & Potongan Gambar

### Apa itu scene change?

Scene change (atau *cut*) adalah momen di mana gambar berubah secara tiba-tiba — dari satu adegan ke adegan lain, dari close-up ke wide shot, atau dari interior ke eksterior. Subtitle **tidak boleh melewati batas ini**.

### Mengapa?

Saat gambar berganti, mata penonton secara otomatis mengalihkan perhatian ke visual baru. Subtitle yang masih terbaca dari adegan sebelumnya terasa mengambang dan mengganggu.

### Cara mendeteksi scene change di Aegisub

**Cara visual:** Putar video perlahan dengan `Space` — perhatikan momen gambar berganti secara tiba-tiba.

**Cara otomatis:** Gunakan **Video → Find Next Scene Change** (`Alt+→`) untuk melompat ke scene change berikutnya yang dideteksi Aegisub secara otomatis.

:::tip[Scene change di tengah dialog]
Jika karakter bicara melewati scene change (misalnya karakter A bicara, lalu cut ke wajah karakter B yang masih mendengarkan), potong baris di batas scene change:

```
Baris 1: "Aku sudah tahu sejak lama"          → End di frame sebelum cut
Baris 2: "bahwa ini tidak akan berhasil."     → Start di frame setelah cut
```
:::

### Baris terlalu pendek karena terpotong scene change

Jika pemotongan menghasilkan baris dengan durasi di bawah 800 ms:

1. **Gabungkan ke baris berikutnya** jika kalimat masih satu napas.
2. **Perpendek teks** jika memungkinkan — hilangkan kata yang konteksnya sudah jelas dari visual.
3. **Diskusikan dengan koordinator** jika kasus ini berulang di episode yang sama.

---

## 7. Kecepatan Baca

Subtitle yang durasinya terlalu pendek untuk teksnya tidak bisa dibaca tuntas. Gunakan panduan ini untuk memastikan penonton punya cukup waktu membaca:

### Standar kecepatan baca

| Panjang baris | Durasi minimum |
| --- | --- |
| 1–10 karakter | 800 ms (minimum absolut) |
| 11–20 karakter | 1.000–1.500 ms |
| 21–40 karakter | 1.500–2.500 ms |
| 41–50 karakter (2 baris penuh) | 2.500–3.500 ms |

Angka di atas adalah panduan, bukan kalkulator kaku. Teks yang padat informasi perlu lebih lama; teks yang berisi kata-kata familiar dan pendek bisa lebih singkat.

### Tes praktis

Baca teks baris tersebut dengan suara pelan — **satu setengah kali lebih lambat** dari kecepatan baca normal. Jika kamu selesai sebelum End, durasinya sudah cukup.

---

## 8. Kasus Khusus

### Dialog dua orang dalam satu baris

Dua karakter yang berbicara bergantian dalam satu baris subtitle menggunakan tanda `-` di awal masing-masing:

```
-Kamu ke mana?
-Ke kantor.
```

Timing baris ini harus mencakup **keseluruhan dialog dari karakter pertama mulai bicara hingga karakter kedua selesai**. Jangan buat jeda di tengah baris dua orang — baris harus tayang utuh dalam satu blok.

### Lagu atau musik (♪)

Subtitle lagu mengikuti lirik, bukan ritme kata per kata. Timing untuk lagu:

- **Start** → saat lirik baris tersebut mulai terdengar
- **End** → saat lirik baris tersebut selesai terdengar, atau tepat sebelum lirik berikutnya dimulai

```
♪ Rasa sayang hey ♪      → timing mengikuti nyanyian, bukan beat
♪ Rasa sayang sayang hey ♪
```

Jika lirik overlap (penyanyi masih menyanyikan baris pertama saat baris kedua sudah dimulai), set End baris pertama persis di momen baris kedua dimulai — jangan tumpang tindih.

### Narasi dan suara hati

Narasi biasanya lebih lambat dari dialog. Berikan durasi yang lebih panjang dari biasanya — pembicara tidak terlihat di layar, sehingga penonton sepenuhnya bergantung pada subtitle.

Gunakan format sesuai proyek:
- **Drama China (Dracin)** (menggunakan kurung + italic):
  ```
  {\\i1}(Saat itu aku baru mengerti, mengapa dia pergi.){\\i0}
  ```
- **Proyek Lain** (menggunakan italic saja):
  ```
  {\\i1}Saat itu aku baru mengerti, mengapa dia pergi.{\\i0}
  ```

### Teks layar dan keterangan

Keterangan yang muncul di layar (teks layar/onscreen text) harus ditiming sesuai durasi teks tersebut tampil secara visual — bukan berdasarkan dialog. Gunakan format sesuai proyek:
- **Proyek Mighty/Dracin** (menggunakan kurung biasa):
  ```
  (Tiga tahun kemudian)
  (Jakarta, 2019)
  ```
- **Proyek Netflix, CR (Crunchyroll), dan lainnya** (menggunakan *Forced Narrative* / ALL CAPS):
  ```
  TIGA TAHUN KEMUDIAN
  JAKARTA, 2019
  ```

### Subtitle untuk suara latar

Suara latar (suara TV, radio, atau panggilan telepon yang terdengar samar) diberi timing sesuai durasi suara terdengar. Gunakan format sesuai proyek untuk membedakan dari dialog utama:
- **Drama China (Dracin)** (menggunakan kurung):
  ```
  (Suara TV: "...korban ditemukan di...")
  ```
- **Proyek Lain** (menggunakan italic saja):
  ```
  {\\i1}Suara TV: "...korban ditemukan di..."{\\i0}
  ```

---

## 9. Retiming: Menyesuaikan ke Video Berbeda

Retiming diperlukan ketika file `.ass` yang sudah ada harus disesuaikan ke versi video yang berbeda — misalnya video tanpa intro, atau video dengan framerate berbeda.

### Menggeser seluruh timing sekaligus

Untuk menggeser semua baris sejumlah waktu yang sama:

1. Pilih semua baris → `Ctrl+A`
2. **Timing → Shift Times**
3. Masukkan nilai geser dalam milidetik, pilih arah (maju/mundur)
4. Konfirmasi

:::caution[Retiming tidak selalu lurus]
Jika video baru berbeda secara framerate (misalnya 24fps ke 25fps), pergeseran tidak konstan. Setiap baris bergeser proporsi berbeda. Gunakan fitur **Timing → Resync** atau diskusikan dengan koordinator — jangan coba lakukan manual.
:::

### Retiming sebagian baris

Jika hanya sebagian episode yang bergeser (misalnya karena ada sisipan adegan di tengah):

1. Pilih baris yang perlu digeser.
2. Gunakan **Timing → Shift Times** hanya pada seleksi tersebut.
3. Verifikasi ulang baris di sekitar titik perubahan.

---

## 10. Checklist Timing Sebelum Submit

Gunakan checklist ini sebelum mengirim file ke tahap QC.

| # | Yang diperiksa | Cara periksa |
| --- | --- | --- |
| CT1 | Semua baris memiliki durasi ≥ 800 ms | **Timing → Check Subtitle Consistency** |
| CT2 | Tidak ada overlap antarbaris | **Timing → Check Subtitle Consistency** → centang *Overlap* |
| CT3 | Jeda antarbaris ≥ 83 ms | **Timing → Check Subtitle Consistency** → centang *Short gaps* |
| CT4 | Tidak ada baris yang melewati scene change | Tonton sekilas di bagian scene change yang padat |
| CT5 | Lagu sudah mengikuti nyanyian, bukan beat | Putar ulang bagian musik |
| CT6 | Narasi sudah diberi durasi yang cukup panjang | Baca pelan-pelan sambil memutar |
| CT7 | Tidak ada baris kosong tanpa teks | Cari di Subtitle Grid secara visual |
| CT8 | File disimpan dalam format `.ass` | Cek ekstensi file sebelum dikirim |

---

## 11. Kesalahan Umum & Solusi

### Baris terlalu singkat (di bawah 800 ms)

**Penyebab umum:** Scene change memotong baris, atau dialog asli sangat pendek.

**Solusi:**
- Gabung ke baris berikutnya jika masih satu konteks.
- Perpendek teks — hilangkan kata yang sudah jelas dari konteks visual.
- Jika tidak bisa, panjangkan End sedikit (hingga scene change berikutnya) dan terima bahwa teks akan bertahan sedikit lebih lama.

### Overlap antara dua baris

**Penyebab umum:** End baris pertama terlalu panjang, Start baris kedua terlalu cepat.

**Solusi:** Periksa dengan `Timing → Check Subtitle Consistency`. Geser End baris pertama atau Start baris kedua hingga ada jeda ≥ 83 ms.

### Subtitle masih muncul setelah scene change

**Penyebab umum:** Scene change tidak terdeteksi secara visual, atau timer tidak sadar ada potongan.

**Solusi:** Aktifkan `Video → Find Next Scene Change` (`Alt+→`) sebelum memulai timing dan tandai semua scene change di episode. Periksa baris yang berakhir di sekitar scene change.

### Teks terlalu panjang untuk durasi yang tersedia

**Penyebab umum:** Dialog asli sangat cepat; terjemahan Indonesia lebih panjang dari dialog Mandarin.

**Solusi:** Koordinasikan dengan penerjemah untuk mempersingkat teks — bukan memperpanjang End melewati batas yang wajar. Durasi subtitle yang terlalu panjang setelah karakter selesai bicara sama janggalnya dengan subtitle yang terlalu cepat hilang.

### Subtitle lagu terlalu cepat berganti

**Penyebab umum:** Timer mengikuti tempo lagu, bukan kapan kata benar-benar terdengar.

**Solusi:** Dengarkan vokal dengan seksama menggunakan Audio Waveform. Perbesar tampilan waveform dengan `Ctrl+scroll` untuk melihat detail awal dan akhir setiap kata secara presisi.

---

## Lihat Juga

- [Panduan Aegisub](/guides/panduan-aegisub/) — cara menggunakan interface, shortcut, dan fitur Aegisub
- [Panduan QC](/guides/panduan-qc/) — checklist QC untuk timing (T2–T5) dan cara memberi catatan revisi
- [Sumber Tambahan](/reference/sumber-tambahan/) — tautan ke Netflix Style Guide dan standar timing eksternal
