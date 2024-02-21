import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
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

// const FilterButton = styled.button`
//   background-color: var(--color-grey-0);
//   border: none;

//   ${(props) =>
//     props.active &&
//     css`
//       background-color: var(--color-brand-600);
//       color: var(--color-brand-50);
//     `}

//   border-radius: var(--border-radius-sm);
//   font-weight: 500;
//   font-size: 1.4rem;
//   /* To give the same height as select */
//   padding: 0.44rem 0.8rem;
//   transition: all 0.3s;

//   &:hover:not(:disabled) {
//     background-color: var(--color-brand-600);
//     color: var(--color-brand-50);
//   }
// `;
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
            option.value === activeFilter
              ? styles.filterBtn + " " + styles.active
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
