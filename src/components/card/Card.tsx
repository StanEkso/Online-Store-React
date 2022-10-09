import React, { FC } from "react";
import ImageAssets from "../../assets/images";
import { Product } from "../../types/product";
import styles from "./Card.module.scss";

type Props = Product;

const Card: FC<Props> = ({
  name,
  description,
  color,
  price,
  rating,
  imageUrl,
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageUrl || ImageAssets.placeholder}
        alt={`Card ${name}`}
        className={styles.container__image}
      />
      <div className={styles.container__content}>
        <h3 className={styles.container__name}>{name}</h3>
        <p className={styles.container__description}>{description}</p>
        <p className={styles.container__quality}>
          <span className={styles.container__quality_name}>Цвет</span>
          {color}
        </p>

        <p className={styles.container__quality}>
          <span className={styles.container__quality_name}>Рейтинг</span>
          {rating}
        </p>

        <p className={styles.container__quality}>
          <span className={styles.container__quality_name}>Цена</span>
          {price} BYN
        </p>
      </div>
    </div>
  );
};

export default React.memo(Card);
