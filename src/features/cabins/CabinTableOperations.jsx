import React from "react";
import TableOperaions from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
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
      {/* field-dashDirection---> name-asc */}
      <SortBy
        options={[
          { value: "name-asc", label: "Sort By Name (A-Z)" },
          { value: "name-desc", label: "Sort By Name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort By Price (Low first)" },
          { value: "regularPrice-desc", label: "Sort By Price (High first)" },
          { value: "maxCapacity-asc", label: "Sort By Capacity (Low first)" },
          { value: "maxCapacity-desc", label: "Sort By Capacity (High first)" },
        ]}
      />
    </TableOperaions>
  );
};

export default CabinTableOperations;
