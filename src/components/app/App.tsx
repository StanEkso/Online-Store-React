import React, { useMemo, useState } from "react";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import generateProducts from "../../utils/product-generator";
import CardList from "../card/CardList";
import SearchBar from "../searchBar/SearchBar";

function App() {
  const [cards] = useState(generateProducts(10));
  const [filterValue, setFilterValue] = useState("");
  const filterDeferred = useDebouncedValue(filterValue);

  const filteredCards = useMemo(
    () => cards.filter(({ name }) => name.includes(filterDeferred)),
    [filterDeferred, cards]
  );
  return (
    <div>
      <SearchBar value={filterValue} setValue={setFilterValue} />
      <CardList cards={filteredCards} />
    </div>
  );
}

export default App;
