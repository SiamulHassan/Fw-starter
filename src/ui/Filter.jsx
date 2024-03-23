import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import styles from "./Filter.module.css";
const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

function Filter({ filterField, options }) {
  const [searchParam, setSearchParam] = useSearchParams();
  const handleSearchParam = (paramVal) => {
    searchParam.set(filterField, paramVal);
    setSearchParam(searchParam);
  };
  const activeFilter = searchParam.get("discount") || options.at(0).value;
  return (
    <StyledFilter>
      {options.map((option, key) => (
        <button
          key={key}
          onClick={() => handleSearchParam(option.value)}
          className={
            activeFilter === option.value
              ? `${styles.filterBtn} ${styles["filterBtn-active"]}`
              : styles.filterBtn
          }
        >
          {option.label}
        </button>
      ))}
    </StyledFilter>
  );
}
export default Filter;
