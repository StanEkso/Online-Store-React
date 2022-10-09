import React, { FC } from "react";
import { sortingTypes } from "../../hooks/useSortings";
import styles from "./Sortings.module.scss";
type Props = {
  sorting: string;
  setSorting: React.Dispatch<React.SetStateAction<string>>;
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
        const classes = [styles.selector];
        if (el.type === sorting) {
          classes.push(styles.selector_active);
        }
        return (
          <div
            key={el.type}
            className={classes.join(" ")}
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
