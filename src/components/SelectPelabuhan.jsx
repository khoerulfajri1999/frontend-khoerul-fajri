import { useEffect, useState } from 'react';
import { getPelabuhansByNegara } from '../services/api';
import { motion } from 'framer-motion';

export default function SelectPelabuhan({ idNegara, onChange }) {
  const [pelabuhans, setPelabuhans] = useState([]);

  useEffect(() => {
    if (idNegara) {
      getPelabuhansByNegara(idNegara).then(res => setPelabuhans(res.data));
    }
  }, [idNegara]);

  return (
    <motion.div
      className="space-y-1"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <label className="block text-sm font-medium text-gray-700">Pelabuhan</label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Pilih Pelabuhan</option>
        {pelabuhans.map(p => (
          <option key={p.id_pelabuhan} value={p.id_pelabuhan}>{p.nama_pelabuhan}</option>
        ))}
      </select>
    </motion.div>
  );
}