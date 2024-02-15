import React from "react";
import styles from "./Heading.module.css";
const Heading = ({ children, as }) => {
  if (as === "h1") return <h1 className={styles.h1}>{children}</h1>;
  if (as === "h2") return <h2 className={styles.h2}>{children}</h2>;
  if (as === "h3") return <h3 className={styles.h3}>{children}</h3>;
};

export default Heading;

// usign as dynamically --shawon sir
