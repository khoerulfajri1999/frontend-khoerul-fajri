import { useState, useEffect } from 'react';
import SelectNegara from './SelectNegara';
import SelectPelabuhan from './SelectPelabuhan';
import SelectBarang from './SelectBarang';
import ReadOnlyField from './ReadOnlyField';
import { getBarangsByPelabuhan } from '../services/api';
import { formatCurrency } from '../utils/format';
import { motion } from 'framer-motion';

export default function FormAutoComplete() {
  const [idNegara, setIdNegara] = useState('');
  const [idPelabuhan, setIdPelabuhan] = useState('');
  const [idBarang, setIdBarang] = useState('');
  const [barangDetail, setBarangDetail] = useState(null);

  useEffect(() => {
    if (idPelabuhan && idBarang) {
      getBarangsByPelabuhan(idPelabuhan).then(res => {
        const found = res.data.find(b => b.id_barang.toString() === idBarang);
        if (found) setBarangDetail(found);
      });
    }
  }, [idBarang, idPelabuhan]);

  const total = barangDetail
    ? barangDetail.harga - (barangDetail.harga * barangDetail.diskon / 100)
    : 0;

  return (
    <motion.div
      className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg space-y-5 border border-gray-200"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-blue-700 border-b pb-2">📦 Form Pemesanan Barang</h2>
      <SelectNegara onChange={setIdNegara} />
      <SelectPelabuhan idNegara={idNegara} onChange={setIdPelabuhan} />
      <SelectBarang idPelabuhan={idPelabuhan} onChange={setIdBarang} />

      {barangDetail && (
        <motion.div
          className="flex flex-col gap-4 pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ReadOnlyField label="Description" value={barangDetail.description} />
          <ReadOnlyField label="Discount" value={`${barangDetail.diskon}%`} />
          <ReadOnlyField label="Harga" value={formatCurrency(barangDetail.harga)} />
          <ReadOnlyField label="Total" value={formatCurrency(total)} />
        </motion.div>
      )}
    </motion.div>
  );
}
