import { useSearchParams } from "react-router-dom";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import { useCabin } from "./useCabin";
const CabinTable = () => {
  const { cabins } = useCabin();
  const [searchParam] = useSearchParams();
  const filteredVal = searchParam.get("discount") || "all";
  let filteredCabins;
  // filter
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
  // sort
  // here '' for default select will not work, so we gave an actual value
  // amra first filter kori then sei filter er upore base kore sort kori, ata akta sequence er moto
  // ascending means choto thke boro --- so, modifier asc ? tahole 1 return koro means ascending e rakho change koiro na, else -1 means oposite--> asec pele des koro
  // a - b ==> ascending order, creates positive number tai asc hole 1 return kora hocche, ar asc na pele -1 orthat a-b asc pelo but modifier asc na so -1 diye multiply hobe ja revese kore diye descending amader dibe
  const sortBy = searchParam.get("sortBy") || "name-asc";
  const [field, dashDirection] = sortBy.split("-");
  const modifier = dashDirection === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
  return (
    <Table cols="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capasity</div>
        <div>Price</div>
        <div>Discount</div>
      </Table.Header>
      {/* {filteredCabins?.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))} */}
      {sortedCabins?.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
};

export default CabinTable;
