import axios from "axios";
import { toast } from "react-toastify";

export const fetchHousesData = async () => {
  try {
    const response = await axios.get(
      "https://wizard-world-api.herokuapp.com/houses"
    );
    if (response.status === 200 && response.data) {
      return response.data;
    } else {
      toast.error("Something went wrong while getting data!");
    }
  } catch (err) {
    toast.error("Something went wrong while getting data!");
  }
};
