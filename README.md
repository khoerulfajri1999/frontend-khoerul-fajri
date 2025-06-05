# 📦 Aplikasi Sistem Pemesanan Barang

Aplikasi ini memungkinkan pengguna untuk memilih negara, pelabuhan, dan barang, lalu melihat detail barang yang tersedia termasuk harga, diskon, dan total harga akhir.

## 🚀 Cara Menjalankan Aplikasi

### 1. Clone Repository Ini


### 2. Install Dependencies

Pastikan Node.js sudah terinstall.

```bash
npm install
```

### 3. Buat File `.env`

Salin file `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Lalu edit `.env` dan isi sesuai konfigurasi berikut:

```
VITE_API_BASE=http://202.157.176.100:3001
```

> ⚠️ **Catatan:** Hapus file `.env.example` setelah membuat dan mengisi `.env`!

### 4. Jalankan Aplikasi

```bash
npm run dev
```

Aplikasi akan berjalan di [http://localhost:5173](http://localhost:5173) secara default.

## 📂 Struktur Folder

```
src/
├── components/
│   ├── FormAutoComplete.jsx
│   ├── SelectNegara.jsx
│   ├── SelectPelabuhan.jsx
│   ├── SelectBarang.jsx
│   └── ReadOnlyField.jsx
├── services/
│   └── api.js
├── utils/
│   └── format.js
.env
```

## 🛠 Teknologi

* React + Vite
* Tailwind CSS
* Framer Motion
* Axios