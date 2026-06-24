---
title: Panduan Terjemahan — Anime Jepang
description: Pedoman lokalisasi, timing, dan standardisasi terjemahan anime Jepang ke bahasa Indonesia dan Malaysia.
sidebar:
  order: 8
---

Panduan ini berisi pedoman penerjemahan, aturan format khusus, pedoman timing & durasi baca, larangan penggunaan kata tertentu, penamaan berkas subtitle, dan pedoman lokalisasi untuk wilayah Malaysia dalam proyek Anime Jepang.

---

## 1. Pedoman Penerjemahan & Lokalisasi

Berikut adalah standar penulisan dan lokalisasi yang wajib diikuti oleh semua penerjemah:

### Gaya Bahasa & Register
* **Tidak Harus Kaku/Formal**: Terjemahan tidak wajib sepenuhnya baku atau formal. Anda diperbolehkan menggunakan bahasa daerah atau bahasa gaul/slang kasual selama **sesuai dengan konteks** adegan dan karakter.
* **Gelar & Sapaan Jepang (Honorifics)**: Penggunaan honorifics Jepang (seperti *-chan*, *-kun*, *-sensei*, *-senpai*, *-sama*, dll.) **diperbolehkan** untuk menjaga nuansa asli anime.

### Tanda Baca & Penulisan Ellipsis
* **Tanda Tanya-Seru (?!)**: **Dilarang** menggunakan tanda baca interrobang `?!`. Gunakan salah satu saja (`?` atau `!`) sesuai dengan intonasi adegan.
* **Gagap & Stuttering**: Hindari penggunaan tanda hubung `-` untuk adegan karakter yang gagap.
  * *Contoh Salah:* `Ba-Baik.`, `A-Apa.`
  * *Contoh Benar:* `Ba... Baik.`, `Ap... Apa.`
* **Format Ellipsis Menyambung**:
  * **Dilarang** menggunakan tiga titik `...` di akhir subtitle jika kalimat tersebut masih bersambung ke subtitle berikutnya.
  * **Dilarang** menggunakan tiga titik `...` di awal subtitle sambungan berikutnya.
  * **Smart Ellipsis**: Gunakan karakter tunggal *smart ellipsis* `…` (U+2026) jika kalimat terputus karena interupsi pembicara lain atau pembicara tidak menyelesaikan kalimatnya. Jangan gunakan tiga titik biasa `...` (tiga karakter dot).
* **Penulisan Angka**:
  * Angka **1 s.d. 10** wajib ditulis menggunakan kata (satu, dua, tiga, empat, lima, enam, tujuh, delapan, sembilan, sepuluh), bukan angka numerik.

### Penggunaan Italic (Miring) & Format Tag
* **Gunakan Tag Aegisub**: Wajib menggunakan tag Aegisub `{\i1}` untuk membuka dan `{\i0}` untuk menutup pemformatan miring (*italic*).
* **DILARANG menggunakan tag HTML** seperti `<i>` dan `</i>`.
* Terapkan miring untuk kondisi berikut:
  1. Adegan **Kilas Balik** (*flashback*) — terutama jika suaranya bergema.
  2. Suara karakter yang berasal dari **telepon, TV, radio, speaker, atau perangkat elektronik lainnya**.
  3. **Suara Hati** atau pikiran batin tokoh (*inner thoughts*).
  4. **Narator** atau suara narasi.

### Teks Layar / Sign (On-Screen Text)
* **Gunakan Huruf Kapital (Capslock)**: Jika ada teks layar, keterangan visual, papan tanda, atau *on-screen text*, tulis terjemahannya langsung menggunakan huruf kapital (capslock).
* *Contoh*: `SEKOLAH MENENGAH ATAS` atau `TIGA TAHUN KEMUDIAN`.

---

## 2. Pedoman Timing & Durasi Baca

Penerjemah dan timer wajib mengikuti aturan timing berikut untuk memastikan kenyamanan membaca penonton:

### Timing di Aegisub
* **Buffer Awal & Akhir**:
  * **Start Timing**: Berikan jarak **3-5 frame** sebelum dialog dimulai. Jangan terlalu mepet (teks baru muncul tepat saat suara dialog mulai terdengar).
  * **End Timing**: Berikan juga jarak **3-5 frame (atau sekitar 5 frame)** setelah dialog selesai agar teks tidak tiba-tiba hilang.
* **Jeda Antarsubtitle (Gap)**:
  * Wajib memberikan jarak **2 frame gap** antar baris subtitle.
  * Hal ini bisa diatur menggunakan aplikasi **Subtitle Edit** saat menyimpan file dalam format `.srt` / `.ass`.
  * **Alternatif (Aegisub)**: Anda bisa menggunakan ekstensi Aegisub Frame Gap yang tersedia di [pololer-Aegisub-Scripts](https://github.com/Aruh1/pololer-Aegisub-Scripts).

### Durasi Baca (Reading Duration)
* **Minimal 1.000 ms**: Semua penerjemah wajib menyesuaikan durasi tayang subtitle agar memiliki durasi baca yang cukup bagi penonton, yaitu **minimal sekitar 1.000 ms (1 detik)** per baris.
* **Pengecualian**: Aturan durasi minimal 1.000 ms ini dikecualikan untuk teks layar / *on-screen text* / *sign*.
* *Penting*: Jika durasi terlalu pendek (di bawah 1.000 ms), penonton tidak akan sempat membaca teks tersebut secara utuh, yang dapat mengurangi dampak dari kerja keras tim penerjemah.

---

## 3. Kata-Kata & Interjeksi yang Dilarang

Untuk menjaga kualitas terjemahan, kata-kata dan cara penulisan interjeksi/ad-lib berikut **tidak boleh digunakan**:

| Kata / Gaya Penulisan | Ketentuan & Solusi |
| --- | --- |
| **Bro** | Dilarang digunakan |
| **Trims** | Dilarang, gunakan **Terima kasih** |
| **Ok** | Dilarang, penulisan yang benar adalah **oke** |
| **Hmm** | Dilarang digunakan |
| **Dan** (di awal kalimat) | Hindari memulai kalimat dengan kata "Dan". Jika diperlukan, ganti dengan **Lalu**, **Juga**, atau hapus jika konteksnya sudah jelas tanpa kata hubung tersebut. |
| **Nah** / **Yah** | Hindari penggunaan interjeksi seperti "nah" atau "yah". Untuk interjeksi **oh**, diperbolehkan digunakan sesekali tergantung pada konteks adegan. |
| **Eh**, **Ah**, **Wah** (secara harfiah) | **Dilarang menuliskan interjeksi/ad-lib secara harfiah** jika bisa diterjemahkan maknanya. Gantilah dengan kata yang memiliki arti kontekstual:<br>• **Eh** → ganti menjadi **Apa?** / **Hah?** / **Oh iya, ...**<br>• **Ah** → ganti menjadi **Apa!** / **Aduh!**<br>• **Wah** → ganti menjadi **Bagus!** / **Hebat!** |
| **Eng...** / **E-tto...** | **Dilarang** menuliskan suara ragu Jepang secara harfiah (seperti `Eng...`). Terjemahkan maknanya secara kontekstual, misalnya menjadi **Sebenarnya...** |

---

## 4. Standardisasi Lokalisasi Malaysia (ms)

Untuk proyek lokalisasi ke bahasa Malaysia, wajib melakukan penyesuaian padanan kata berikut:

| Bahasa Indonesia / Kasual | ✅ Standardisasi Malaysia |
| --- | --- |
| Hari ni | **Hari ini** |
| Kan | **Bukan** |
| Itu je | **Itu saja** |
| Taklah... | **Tidak** |
| Aku pun sama | **Saya pun sama** |
| Macam tu | **Macam itu** atau **Begitu rupanya** |
| Ka... Kamiya-san! | **Kamiya-san!** (hilangkan gagap) |
| Eh!? Secepat ini? | **Secepat ini?** (hilangkan interjeksi gagap/interrobang) |

---

## 5. Format Penamaan Berkas Subtitle

Gunakan format penamaan berkas subtitle berikut secara konsisten:

### Timing (TM)
* **Format**: `[Judul Anime dalam Bahasa Inggris] S[Season]E[Episode]_Timing`
* *Contoh*: `In The Clear Moonlit Dusk S1E08_Timing`

### Translation (TL)
* **Format**: `[Judul Anime dalam Bahasa Inggris] S[Season]E[Episode]_[id atau ms]_Translation`
* *Contoh (Indonesia)*: `In The Clear Moonlit Dusk S1E08_id_Translation`
* *Contoh (Malaysia)*: `In The Clear Moonlit Dusk S1E08_ms_Translation`

### Quality Assurance (QA)
* **Format**: `[Judul Anime dalam Bahasa Inggris] S[Season]E[Episode]_[id atau ms]`
* *Contoh (Indonesia)*: `In The Clear Moonlit Dusk S1E08_id`
* *Contoh (Malaysia)*: `In The Clear Moonlit Dusk S1E08_ms`
