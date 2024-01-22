import { toast } from "react-toastify";
import http from '../utils/http';

export const fetchHousesData = async () => {
  try {
    const response = await http.get("/houses");
    return response.data;
  } catch (err) {
    toast.error("Something went wrong while getting data!");
    return []
  }
};
