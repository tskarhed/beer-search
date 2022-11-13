import { useEffect, useState } from 'react';
import './App.css';
import { searchBeer } from './api/beerHook';

function App() {
  const [beers, setMyBeers] = useState([]);

  const onChange = (event: React.ChangeEvent) => {
    console.log(event.target.value);
    searchBeer(event.target.value, 1).then((beers) => {
      console.log(beers);
      setMyBeers(beers);
    });
  };

  return (
    <div className="App">
      <h1>Beer search</h1>
      <input placeholder="Search for beer here" onChange={onChange} />
      <section>
        <>
          {!!beers.length && <h2>Beers I found</h2>}
          {beers.map((beer) => (
            <p>{beer.name}</p>
          ))}
        </>
      </section>
    </div>
  );
}

export default App;
