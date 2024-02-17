import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCabins } from "../services/apiCabins";

const CabinTables = () => {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });
  return (
    <div role="table" className="table">
      <header role="row" className="header">
        <div>table</div>
        <div>Cabin</div>
        <div>Capasity</div>
        <div>Price</div>
        <div>Discount</div>
      </header>
    </div>
  );
};

export default CabinTables;
