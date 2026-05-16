import { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((toysData) => setToys(toysData));
  }, []);

  function handleToggleForm() {
    setShowForm((show) => !show);
  }

  function handleAddToy(newToy) {
    setToys((prevToys) => [...prevToys, newToy]);
  }

  function handleDeleteToy(deletedToyId) {
    setToys((prevToys) => prevToys.filter((toy) => toy.id !== deletedToyId));
  }

  function handleLikeToy(updatedToy) {
    setToys((prevToys) =>
      prevToys.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy))
    );
  }

  return (
    <>
      <Header showForm={showForm} onClickToggleForm={handleToggleForm} />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <ToyContainer
        toys={toys}
        onDeleteToy={handleDeleteToy}
        onLikeToy={handleLikeToy}
      />
    </>
  );
}

export default App;