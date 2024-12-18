"use server";
import axios from "axios";
import { MapDataItem } from "@/types";

const getMapData = async (): Promise<MapDataItem[]> => {
  try {
    const response = await axios.get("http://72.5.42.40:3102/map-data");
    const data = response.data;
    return data.map((item: MapDataItem) => ({
      ...item,
      lat: item.lat,
      lon: item.lon,
    }));
  } catch (error) {
    console.error("Ошибка получения данных:", error);
    if (axios.isAxiosError(error)) {
      console.error("Ошибка запроса:", error.message);
    } else {
      console.error("Неизвестная ошибка:", error);
    }
    return [];
  }
};

export default getMapData;



