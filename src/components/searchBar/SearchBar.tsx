import React, { FC, useCallback } from "react";
import styles from "./SearchBar.module.scss";
type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: FC<Props> = ({ value, setValue }) => {
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    [setValue]
  );
  return (
    <div className={styles.container}>
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
