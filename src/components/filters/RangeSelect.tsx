import React, { FC, useState } from "react";
import styles from "./Filters.module.scss";

interface RangeSelectorProps {
  onChange: (obj: RangeState) => void;
}
interface RangeState {
  min?: number;
  max?: number;
}
const RangeSelect: FC<RangeSelectorProps> = ({ onChange }) => {
  const [range, setRange] = useState<RangeState>({});
  const handlePrice = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...range, [name]: value });
    setRange((oldRange) => ({ ...oldRange, [name]: value }));
  };
  return (
    <>
      <div className={styles.price}>
        <input
          className={styles.price__input}
          min={0}
          max={range.max ?? Infinity}
          type="number"
          name="min"
          onChange={handlePrice}
          placeholder="от"
        />
        -
        <input
          className={styles.price__input}
          min={range.min || 0}
          type="number"
          name="max"
          onChange={handlePrice}
          placeholder="до"
        />
      </div>
    </>
  );
};

export default RangeSelect;
