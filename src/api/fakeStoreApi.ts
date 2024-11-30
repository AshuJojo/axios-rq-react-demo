import axios from "axios";

const BASE_URL: string = "https://fakestoreapi.com";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getAllProducts = async () => {
  try {
    const res = await axiosInstance.get("/products");
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
