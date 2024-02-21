import React from "react";
import TableOperaions from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
const CabinTableOperations = () => {
  return (
    <TableOperaions>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discoutn" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
    </TableOperaions>
  );
};

export default CabinTableOperations;
