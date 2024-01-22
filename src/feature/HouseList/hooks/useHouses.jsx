import { useEffect, useMemo, useState } from "react";
import { colors } from "../../../constents/colors";
import { fetchHousesData } from "../../../services/house";

export const useHouses = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchHousesData()
      setData(data);
      setLoading(false)
    };
    fetchData()
  }, []);

  const formattedData = useMemo(
    () => data?.map((house) => {
      const houseColors = house?.houseColours?.split(" and ");
      return {
        id: house.id,
        founderName: house?.founder?.split(" ")?.[1],
        animalName: house?.animal,
        founderFullName: house?.founder,
        firstColor: colors[houseColors[0].toLowerCase()] ? houseColors[0].toLowerCase() : "#ffffff",
        secondColor: colors[houseColors[1].toLowerCase()] ? houseColors[1].toLowerCase() : "#000000",
      }
    }), [data]
  );

  return {
    data: formattedData,
    loading
  };
};
