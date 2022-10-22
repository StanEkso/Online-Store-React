import React, { FC, useState } from "react";
import styles from "./Filters.module.scss";

interface MultiplySelectProps {
  options: string[];
  onChange: (newSet: Set<string>) => void;
}

const MultiplySelect: FC<MultiplySelectProps> = ({ options, onChange }) => {
  const [optionsSelected, setOptionsSelected] = useState(new Set<string>());
  const handleSelect = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newSet = new Set(optionsSelected);
    newSet.has(target.name)
      ? newSet.delete(target.name)
      : newSet.add(target.name);
    onChange(newSet);
    setOptionsSelected(newSet);
  };
  return (
    <>
      {options.map((option) => (
        <div key={option} className={styles.color__selector}>
          <input
            className={styles.color__selector_checkbox}
            type="checkbox"
            name={option}
            onChange={handleSelect}
            checked={optionsSelected.has(option)}
            id={`color_${option}`}
          />
          <label htmlFor={`color_${option}`}></label>
          {option}
        </div>
      ))}
    </>
  );
};

export default MultiplySelect;
