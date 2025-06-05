import { useEffect, useState } from 'react';
import { getBarangsByPelabuhan } from '../services/api';
import { motion } from 'framer-motion';

export default function SelectBarang({ idPelabuhan, onChange }) {
  const [barangs, setBarangs] = useState([]);

  useEffect(() => {
    if (idPelabuhan) {
      getBarangsByPelabuhan(idPelabuhan).then(res => setBarangs(res.data));
    }
  }, [idPelabuhan]);

  return (
    <motion.div
      className="space-y-1"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <label className="block text-sm font-medium text-gray-700">Barang</label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Pilih Barang</option>
        {barangs.map(b => (
          <option key={b.id_barang} value={b.id_barang}>{`${b.id_barang} - ${b.nama_barang}`}</option>
        ))}
      </select>
    </motion.div>
  );
}