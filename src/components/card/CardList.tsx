import React, { FC } from "react";
import { Product } from "../../types/product";
import Card from "./Card";
import styles from "./Card.module.scss";
import CardNotFound from "./CardNotFound";
type Props = {
  cards: Product[];
};

const CardList: FC<Props> = ({ cards }) => {
  return (
    <div className={styles.list}>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
      {!cards.length && <CardNotFound />}
    </div>
  );
};

export default React.memo(CardList);
