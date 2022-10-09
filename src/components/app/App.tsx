import React, { useMemo, useState } from "react";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import useSorting from "../../hooks/useSortings";
import generateProducts from "../../utils/product-generator";
import CardList from "../card/CardList";
import SearchBar from "../searchBar/SearchBar";
import Sortings from "../sortings/Sortings";

function App() {
  const [cards] = useState(generateProducts(10));

  const [filterValue, setFilterValue] = useState("");
  const filterDeferred = useDebouncedValue(filterValue);

  const [sortingValue, setSortingValue] = useState("default");
  const sortingFunction = useSorting(sortingValue);

  const filteredCards = useMemo(() => {
    return cards
      .filter(({ name }) => name.includes(filterDeferred))
      .sort(sortingFunction);
  }, [filterDeferred, cards, sortingFunction]);
  return (
    <div className="app__wrapper">
      <SearchBar value={filterValue} setValue={setFilterValue} />
      <Sortings sorting={sortingValue} setSorting={setSortingValue} />
      <h2>Всего товаров: {filteredCards.length}</h2>

      <CardList cards={filteredCards} />
    </div>
  );
}

export default App;
