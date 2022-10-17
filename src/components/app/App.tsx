import { useCallback, useMemo, useState } from "react";
import { useFilters, useSorting } from "../../hooks";
import { ProductColor } from "../../types/color";
import generateProducts from "../../utils/product-generator";
import CardList from "../card/CardList";
import Container from "../container/Container";
import FilterByColor from "../filters/FilterByColor";
import FilterByName from "../filters/FilterByName";
import FilterByPrice from "../filters/FilterByPrice";
import Sortings from "../sortings/Sortings";

const PRODUCT_COUNT = 500;

function App() {
  const [cards] = useState(generateProducts(PRODUCT_COUNT));

  const [sortingValue, setSortingValue] = useState("default");
  const sortingFunction = useSorting(sortingValue);

  const { filterFunction, filters, setFilters } = useFilters();

  const filteredCards = useMemo(
    () => cards.filter(filterFunction).sort(sortingFunction),
    [cards, sortingFunction, filterFunction]
  );

  const colors = useMemo(
    () => Array.from(new Set(cards.map(({ color }) => color))).sort(),
    [cards]
  );
  const setSearchValue = useCallback((searchValue: string) => {
    setFilters((filters) => ({
      ...filters,
      searchValue,
    }));
  }, []);
  const setSelectedColors = useCallback(
    (selectedColors: Set<ProductColor>) =>
      setFilters((filters) => ({ ...filters, selectedColors })),
    []
  );
  const setMinMaxPrice = useCallback(
    (object: { minimalPrice?: number; maximumPrice?: number }) => {
      setFilters((filters) => ({
        ...filters,
        ...object,
      }));
    },
    []
  );
  return (
    <div className="app__wrapper">
      <header className="app__wrapper-logotype">
        <h1>React-Shop</h1>
      </header>
      <div className="app__wrapper-header app__wrapper-header-sticky">
        <FilterByName value={filters.searchValue} setValue={setSearchValue} />
        <Sortings sorting={sortingValue} setSorting={setSortingValue} />
      </div>

      <div className="app__wrapper__grid">
        <div className="app__wrapper-column">
          <div className="app__wrapper-column-sticky">
            <Container>
              <FilterByColor
                colors={colors}
                activeColors={filters.selectedColors}
                setColors={setSelectedColors}
              />
              <FilterByPrice
                maximumPrice={filters.maximumPrice}
                minimalPrice={filters.minimalPrice}
                setMinMaxPrice={setMinMaxPrice}
              />
            </Container>
            <h2>Всего товаров: {filteredCards.length}</h2>
          </div>
        </div>
        <CardList cards={filteredCards} />
      </div>
    </div>
  );
}

export default App;
