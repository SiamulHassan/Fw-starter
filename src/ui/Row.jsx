import styles from "./Row.module.css";
// making reusable div
const Row = ({ children, type = "vertical" }) => {
  if (type === "horizontal") {
    return <div className={`${styles[type]}`}>{children}</div>;
  }

  if (type === "vertical") {
    return <div className={`${styles[type]}`}>{children}</div>;
  }
};

export default Row;

// const Row = styled.div`
//   display: flex;

//   ${(props) =>
//     props.type === "horizontal" &&
//     css`
//       justify-content: space-between;
//       align-items: center;
//     `}

//   ${(props) =>
//     props.type === "vertical" &&
//     css`
//       flex-direction: column;
//       gap: 1.6rem;
//     `}
// `;

// Row.defaultProps = {
//   type: "vertical",
// };
