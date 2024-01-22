import { useHouses } from "./hooks/useHouses";
import { CircleLoader } from "react-spinners";
import { HouseListItem } from "./HouseListItem";

export const HouseList = () => {
  const { data, loading } = useHouses();

  if (loading) {
    return (
      <div className="App">
        <div className="loaderContainer">
          <CircleLoader loading={loading} size={100} />
        </div>
      </div>

    )
  }

  return (
    <div className="App">
      {data?.map((house) => (
        <HouseListItem data={house} key={house.id} />
      ))}
    </div>

  )
}
