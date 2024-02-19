import CabinRow from "./CabinRow";
import styles from "./CabinTable.module.css";
import { useCabin } from "./useCabin";
const CabinTable = () => {
  const { cabins } = useCabin();
  return (
    <div role="table" className={styles.table}>
      <header role="row" className={styles.tableHeader}>
        <div></div>
        <div>Cabin</div>
        <div>Capasity</div>
        <div>Price</div>
        <div>Discount</div>
      </header>
      {cabins?.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
};

export default CabinTable;
