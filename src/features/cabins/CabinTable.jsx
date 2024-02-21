import { useSearchParams } from "react-router-dom";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import { useCabin } from "./useCabin";
const CabinTable = () => {
  const { cabins } = useCabin();
  const [searchParam] = useSearchParams();
  const filteredVal = searchParam.get("discount") || "all";
  let filteredCabins;
  switch (filteredVal) {
    case "all":
      filteredCabins = cabins;
      break;
    case "no-discount":
      filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);
      break;
    case "with-discount":
      filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);
      break;
  }
  return (
    <Table cols="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capasity</div>
        <div>Price</div>
        <div>Discount</div>
      </Table.Header>
      {filteredCabins?.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
};

export default CabinTable;
