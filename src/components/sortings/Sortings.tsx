import React, { FC, useCallback } from "react";
import { sortingTypes } from "../../hooks/useSortings";
import styles from "./Sortings.module.scss";
interface Props {
  sorting: string;
  setSorting: React.Dispatch<React.SetStateAction<string>>;
}

const getClassesForSelector = (isActive = false) => {
  const classes = [styles.selector];
  if (isActive) {
    classes.push(styles.selector_active);
  }
  return classes.join(" ");
};

const Sortings: FC<Props> = ({ sorting, setSorting }) => {
  const handleSortingClick = useCallback(
    (type: string) =>
      setSorting((prevSorting) => (prevSorting !== type ? type : "default")),
    [setSorting]
  );
  return (
    <div className={styles.container}>
      {Object.entries(sortingTypes).map(([key, value]) => {
        return (
          <div
            key={key}
            className={getClassesForSelector(key === sorting)}
            onClick={() => handleSortingClick(key)}
          >
            {value.name}
          </div>
        );
      })}
    </div>
  );
};
export default React.memo(Sortings);
