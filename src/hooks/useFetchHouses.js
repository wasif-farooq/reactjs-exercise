import { useEffect, useMemo, useState } from "react";
import { fetchHousesData } from "../services/Houses";
import { colors } from "../constents/colors";

const useFetchHouses = () => {
  const [response, setResponse] = useState({ isLoading: false, data: null });
  useEffect(() => {
    const fetchHouses = async () => {
      setResponse({ ...response, isLoading: true });
      const resp = await fetchHousesData();
      if (resp) {
        setResponse({ data: resp, isLoading: false });
      } else {
        setResponse({ ...response, isLoading: false });
      }
    };

    fetchHouses();
  }, []);

  const data = useMemo(
    () =>
      response?.data?.map((house) => ({
        founder_name: house?.founder?.split(" ")?.[1],
        animal_name: house?.animal,
        founder_full_name: house?.founder,
        first_color: colors.includes(
          house?.houseColours?.split("and")?.[0]?.trim()?.toLowerCase()
        )
          ? house?.houseColours?.split("and")?.[0]?.trim()
          : "#ffffff",
        second_color: colors.includes(
          house?.houseColours?.split("and")?.[1]?.trim()?.toLowerCase()
        )
          ? house?.houseColours?.split("and")?.[1]?.trim()
          : "#000000",
      })),
    [response.data]
  );

  return { data };
};

export default useFetchHouses;
