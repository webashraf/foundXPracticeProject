"use server";
import axiosInstance from "@/src/lib/AxiosInstance";

export const getCategories = async () => {
  try {
    const { data } = await axiosInstance.get("/item-categories");
    // console.log(data);
    return data;
  } catch (error: any) {
    // console.log(error);
    throw new Error(error.message);
  }
};
