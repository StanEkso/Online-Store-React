import React, { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.scss";

const StickyHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={[
        styles.container__header,
        styles.container__header_sticky,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default React.memo(StickyHeader);
