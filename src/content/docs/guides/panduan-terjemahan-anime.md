---
title: Panduan Terjemahan — Anime Jepang
description: Pedoman lokalisasi dan standardisasi terjemahan anime Jepang ke bahasa Indonesia dan Malaysia.
sidebar:
  order: 8
---

Panduan ini berisi pedoman penerjemahan, aturan format khusus, larangan penggunaan kata tertentu, penamaan berkas subtitle, dan pedoman lokalisasi untuk wilayah Malaysia dalam proyek Anime Jepang.

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

### Penggunaan Italic (Miring)
Gunakan format miring (*italic* / tag `{\i1}...{\i0}`) untuk kondisi berikut:
1. Adegan **Kilas Balik** (*flashback*).
2. Suara yang berasal dari **telepon, TV, radio, speaker, atau perangkat elektronik lainnya**.
3. **Suara Hati** atau pikiran batin tokoh (*inner thoughts*).
4. **Narasi** (*voice over*).

---

## 2. Kata-Kata yang Dilarang

Untuk menjaga kualitas dan kesesuaian terjemahan, kata-kata berikut **tidak boleh digunakan**:

| Kata | Ketentuan & Solusi |
| --- | --- |
| **Bro** | Dilarang digunakan |
| **Trims** | Dilarang, gunakan **Terima kasih** |
| **Ok** | Dilarang, penulisan yang benar adalah **oke** |
| **Hmm** | Dilarang digunakan |
| **Dan** (di awal kalimat) | Hindari memulai kalimat dengan kata "Dan". Jika diperlukan, ganti dengan **Lalu**, **Juga**, atau hapus jika konteksnya sudah jelas tanpa kata hubung tersebut. |
| **Nah** / **Yah** | Hindari penggunaan interjeksi seperti "nah" atau "yah". Untuk interjeksi **oh**, diperbolehkan digunakan sesekali tergantung pada konteks adegan. |

---

## 3. Standardisasi Lokalisasi Malaysia (ms)

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

## 4. Format Penamaan Berkas Subtitle

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
