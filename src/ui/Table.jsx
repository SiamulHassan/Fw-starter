import styles from "./Table.module.css";
import styled from "styled-components";
import { createContext, useContext } from "react";

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;
const TableContext = createContext();
function Table({ cols, children }) {
  return (
    <TableContext.Provider value={{ cols }}>
      <div className={styles.table} role="table">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { cols } = useContext(TableContext);
  const headerStyle = {
    display: "grid",
    gridTemplateColumns: cols,
    columnGap: "2.4rem",
    alignItems: "center",
    transition: "none",
  };
  return (
    <header role="row" className={styles.rowHeader} style={headerStyle}>
      {children}
    </header>
  );
}
function Row({ children }) {
  const { cols } = useContext(TableContext);
  const headerStyle = {
    display: "grid",
    gridTemplateColumns: cols,
    columnGap: "2.4rem",
    alignItems: "center",
    transition: "none",
  };
  return (
    <div role="row" className={styles.row} style={headerStyle}>
      {children}
    </div>
  );
}
Table.Header = Header;
Table.Row = Row;
Table.Footer = Footer;
export default Table;
