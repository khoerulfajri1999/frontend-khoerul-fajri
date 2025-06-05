import { useEffect, useState } from 'react';
import { getNegaras } from '../services/api';
import { motion } from 'framer-motion';

export default function SelectNegara({ onChange }) {
  const [negaras, setNegaras] = useState([]);

  useEffect(() => {
    getNegaras().then(res => setNegaras(res.data));
  }, []);

  return (
    <motion.div
      className="space-y-1"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <label className="block text-sm font-medium text-gray-700">Negara</label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Pilih Negara</option>
        {negaras.map(n => (
          <option key={n.id_negara} value={n.id_negara}>{n.nama_negara}</option>
        ))}
      </select>
    </motion.div>
  );
}