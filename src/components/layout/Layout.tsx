import React, { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.container__logotype}>
        <h1>React-Shop</h1>
      </header>
      {children}
    </div>
  );
};

export default React.memo(Layout);
