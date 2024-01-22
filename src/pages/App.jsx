import React from "react";
import Cards from "../components/Cards";
import useFetchHouses from "../hooks/useFetchHouses";

function App() {
  const { data } = useFetchHouses();
  return (
    <div className="App">
      {data?.map((house, idx) => (
        <Cards data={house} key={idx} />
      ))}
    </div>
  );
}

export default App;
