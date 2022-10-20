import React, { FC } from "react";
import { Product } from "../../types/product";
import Card from "./Card";
import styles from "./Card.module.scss";
import CardNotFound from "./CardNotFound";
interface CardListProps {
  cards: Product[];
}

const CardList: FC<CardListProps> = ({ cards }) => {
  return (
    <>
      {!!cards.length && (
        <div className={styles.list}>
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      )}

      {!cards.length && <CardNotFound />}
    </>
  );
};

export default React.memo(CardList);
