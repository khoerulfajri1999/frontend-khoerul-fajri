import { motion } from 'framer-motion';

export default function ReadOnlyField({ label, value }) {
  return (
    <motion.div
      className="space-y-1"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        value={value}
        readOnly
        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
      />
    </motion.div>
  );
}