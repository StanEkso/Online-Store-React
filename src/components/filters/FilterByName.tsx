import React, { FC, useCallback } from "react";
import ImageAssets from "../../assets/images";
import styles from "./SearchBar.module.scss";
type Props = {
  value: string;
  setValue: (value: string) => void;
};

const FilterByName: FC<Props> = ({ value, setValue }) => {
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    [setValue]
  );
  return (
    <div className={styles.container}>
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

export default React.memo(FilterByName);
