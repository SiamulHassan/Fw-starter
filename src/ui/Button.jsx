import styles from "./Button.module.css";
const Button = ({ children, type, size, onClick }) => {
  return (
    <button
      className={`${styles.btn} ${styles[type]} ${styles[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
{
  /* <Button size="btn-large" type={"btn-primary"}>
Primary
</Button> */
}
