import React, { FC, useCallback } from "react";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: FC<Props> = ({ value, setValue }) => {
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  );
  return <input placeholder="Поиск" value={value} onChange={changeHandler} />;
};

export default SearchBar;
