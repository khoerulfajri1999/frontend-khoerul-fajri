import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE;

export const getNegaras = () => axios.get(`${API_BASE}/negaras`);

export const getPelabuhansByNegara = (id) =>
  axios.get(`${API_BASE}/pelabuhans?filter={"where":{"id_negara":${id}}}`);

export const getBarangsByPelabuhan = (id) =>
  axios.get(`${API_BASE}/barangs?filter={"where":{"id_pelabuhan":${id}}}`);
