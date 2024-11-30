import axios, { AxiosResponse } from "axios";
import Product from "../types/Product";

const BASE_URL: string = "https://fakestoreapi.com";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getAllProducts = async (): Promise<Product[] | null> => {
  try {
    const res: AxiosResponse<Product[]> = await axiosInstance.get("/products");
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
