"use server";
import axios from "axios";
import { NetworkData } from "@/types"; 

const getNetworkData = async (): Promise<NetworkData | null> => {
  try {
    const response = await axios.get<NetworkData>(
      "http://72.5.42.40:3102/network-data"
    );
    
    return response.data;
  } catch (error) {
    console.error("Ошибка получения данных:", error);
    if (axios.isAxiosError(error)) {
      console.error("Ошибка запроса:", error.message);
    } else {
      console.error("Неизвестная ошибка:", error);
    }
    return null;
  }
};

export default getNetworkData;
