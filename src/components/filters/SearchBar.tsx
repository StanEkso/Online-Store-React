import React, { FC, useCallback } from "react";
import ImageAssets from "../../assets/images";
import styles from "./Filters.module.scss";
interface SearchBarProps {
  value: string;
  setValue: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ value, setValue }) => {
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    [setValue]
  );
  return (
    <div className={styles.search__bar}>
      <img
        src={ImageAssets.searchIcon}
        alt="Иконка поиска"
        className={styles.icon}
      />
      <input
        placeholder="Поиск"
        value={value}
        onChange={changeHandler}
        className={styles.field}
      />
    </div>
  );
};

export default React.memo(SearchBar);
