import React, { FC } from "react";
import { sortingTypes } from "../../hooks/useSortings";
import styles from "./Sortings.module.scss";
type Props = {
  sorting: string;
  setSorting: React.Dispatch<React.SetStateAction<string>>;
};

const getClassesForSelector = (isActive = false) => {
  const classes = [styles.selector];
  if (isActive) {
    classes.push(styles.selector_active);
  }
  return classes.join(" ");
};

const Sortings: FC<Props> = ({ sorting, setSorting }) => {
  const handleSortingClick = (type: string) => {
    if (sorting === type) {
      return setSorting("default");
    }
    setSorting(type);
  };
  return (
    <div className={styles.container}>
      {sortingTypes.map((el) => {
        return (
          <div
            key={el.type}
            className={getClassesForSelector(el.type === sorting)}
            onClick={() => handleSortingClick(el.type)}
          >
            {el.name}
          </div>
        );
      })}
    </div>
  );
};
export default React.memo(Sortings);
