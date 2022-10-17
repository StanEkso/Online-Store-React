import React, { FC } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactElement[] | React.ReactElement;
}
const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
