import React from "react";
import Cards from "../components/Cards";
import useFetchHouses from "../hooks/useFetchHouses";
import { CircleLoader } from "react-spinners";

function App() {
  const { data, loading } = useFetchHouses();
  return (
    <div className="App">
      {loading ? (
        <div className="loaderContainer">
          <CircleLoader loading={loading} size={100} />
        </div>
      ) : (
        data?.map((house, idx) => <Cards data={house} key={idx} />)
      )}
    </div>
  );
}

export default App;
