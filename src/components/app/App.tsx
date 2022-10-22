import { useCallback, useMemo, useState } from "react";
import { useFilters, useSorting } from "../../hooks";
import { ProductColor } from "../../types/color";
import { getProductColor } from "../../utils";
import generateProducts from "../../utils/product-generator";
import CardList from "../card/CardList";
import Container from "../container/Container";
import SearchBar from "../filters/SearchBar";
import MultiplySelect from "../filters/MultiplySelect";
import RangeSelect from "../filters/RangeSelect";
import Layout from "../layout/Layout";
import StickyHeader from "../layout/StickyHeader";
import Sortings from "../sortings/Sortings";
import styles from "./App.module.scss";
const PRODUCT_COUNT = 500;

function App() {
  const [cards] = useState(generateProducts(PRODUCT_COUNT));

  const { sortingFunction, sorting, setSorting } = useSorting("default");

  const { filterFunction, filters, setFilters } = useFilters();

  const filteredCards = useMemo(
    () => cards.filter(filterFunction).sort(sortingFunction),
    [cards, sortingFunction, filterFunction]
  );

  const colors = useMemo(
    () => Array.from(new Set(cards.map(getProductColor))).sort(),
    [cards]
  );
  const setSearchValue = useCallback(
    (searchValue: string) =>
      setFilters((filters) => ({ ...filters, searchValue })),
    [setFilters]
  );
  const setSelectedColors = useCallback(
    (selectedColors: Set<string>) => {
      const selected = selectedColors as Set<ProductColor>;
      setFilters((filters) => ({ ...filters, selectedColors: selected }));
    },
    [setFilters]
  );
  const setPriceField = ({ min, max }: { min?: number; max?: number }) => {
    setFilters((filters) => ({
      ...filters,
      minimalPrice: min,
      maximumPrice: max,
    }));
  };
  return (
    <Layout>
      <StickyHeader>
        <SearchBar value={filters.searchValue} setValue={setSearchValue} />
        <Sortings sorting={sorting} setSorting={setSorting} />
      </StickyHeader>

      <div className={styles.container__grid}>
        <div className={styles.container__column}>
          <div className={styles.container__column_sticky}>
            <Container>
              <h4>Цвет</h4>
              <MultiplySelect options={colors} onChange={setSelectedColors} />
              <h4>Цена</h4>
              <RangeSelect onChange={setPriceField} />
            </Container>
            <h2>Всего товаров: {filteredCards.length}</h2>
          </div>
        </div>
        <CardList cards={filteredCards} />
      </div>
    </Layout>
  );
}

export default App;
