import { useQuery } from "@tanstack/react-query";
// import { getCabins } from "../services/apiCabins";
import CabinRow from "./CabinRow";
import { getCabins } from "../../services/apiCabins";
import styles from "./CabinTable.module.css";
const CabinTable = () => {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });
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
