import React from "react";
import styles from "./Card.module.scss";

const CardNotFound = () => {
  return (
    <h4 className={styles.not__found}>
      По выбранным фильтрам ничего не найдено
    </h4>
  );
};

export default CardNotFound;
