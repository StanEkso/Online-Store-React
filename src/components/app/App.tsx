import React, { useMemo, useState } from "react";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import { useFilters } from "../../hooks/useFilters";
import useSorting from "../../hooks/useSortings";
import generateProducts from "../../utils/product-generator";
import CardList from "../card/CardList";
import Filters from "../filters/Filters";
import SearchBar from "../searchBar/SearchBar";
import Sortings from "../sortings/Sortings";

const PRODUCT_COUNT = 500;

function App() {
  const [cards] = useState(generateProducts(PRODUCT_COUNT));

  const [filterValue, setFilterValue] = useState("");
  const filterDeferred = useDebouncedValue(filterValue);

  const [sortingValue, setSortingValue] = useState("default");
  const sortingFunction = useSorting(sortingValue);

  const { filterFunction, filters, setFilters } = useFilters();

  const filteredCards = useMemo(() => {
    return cards
      .filter(({ name }) => name.includes(filterDeferred))
      .filter(filterFunction)
      .sort(sortingFunction);
  }, [filterDeferred, cards, sortingFunction, filterFunction]);

  const colors = useMemo(
    () => Array.from(new Set(cards.map(({ color }) => color))),
    [cards]
  );
  return (
    <div className="app__wrapper">
      <SearchBar value={filterValue} setValue={setFilterValue} />
      <Sortings sorting={sortingValue} setSorting={setSortingValue} />

      <div className="app__wrapper__grid">
        <div>
          <Filters colors={colors} filters={filters} setFilters={setFilters} />
          <h2>Всего товаров: {filteredCards.length}</h2>
        </div>
        <CardList cards={filteredCards} />
      </div>
    </div>
  );
}

export default App;
