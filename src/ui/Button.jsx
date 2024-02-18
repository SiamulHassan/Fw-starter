import styles from "./Button.module.css";
const Button = ({ children, type, size, onClick, htmlType }) => {
  return (
    <button
      className={`${styles.btn} ${styles[type]} ${styles[size]}`}
      onClick={onClick}
      type={htmlType}
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
