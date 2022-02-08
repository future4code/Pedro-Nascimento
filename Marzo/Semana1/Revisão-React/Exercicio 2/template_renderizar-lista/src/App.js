import { useState } from "react";
import "./styles.css";
import { data } from "./data/data";
import InfoCard from "./components/CardPeople/InfoCard";

export default function App() {
  const [people, setPeople] = useState([]);

  const renderiza = () => {
    setPeople(data);
  };

  const lista = people.map((item) => {
    return (
      <div className="body">

        {/* <CardName name={item.name} /> */}

        <InfoCard
          name={item.name}
          height={item.height}
          mass={item.mass}
          hair_color={item.hair_color}
          skin_color={item.skin_color}
          eye_color={item.eye_color}
          birth_year={item.birth_year}
          gender={item.gender}
        />


      </div>
    )
  });

  return (
    <div className="App">
      <h1>Renderização de lista</h1>
      <button onClick={renderiza}>Renderiza lista</button>
      <div className="List">
        <ul>
          {lista}
        </ul>
      </div>
    </div>
  );
}
