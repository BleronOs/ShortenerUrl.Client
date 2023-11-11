import { axiosConfig } from "./axios-config/axios.config";

export const getListOfShortenerUrl = async () => await axiosConfig.get('ShortenerUrl/list');
export const deleteUrl = async (id) => await axiosConfig.delete(`ShortenerUrl/delete/${id}`);
export const createShortUrl = async (payload) => await axiosConfig.post('ShortenerUrl/add/', payload);