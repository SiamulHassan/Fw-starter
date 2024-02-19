import styled from "styled-components";
const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
import { formatCurrency } from "../../utils/helpers";
import styles from "./CabinRow.module.css";
import CreateCabinForm from "./CreateCabinForm";
import { useState } from "react";
import { useDeleteCabin } from "./useDeleteCabin";
const CabinRow = ({ cabin }) => {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { name, maxCapacity, regularPrice, discount, image, id } = cabin;
  return (
    <>
      <div role="row" className={styles["table-row"]}>
        <img src={image} alt="cabin img" className={styles["cabin-img"]} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <button onClick={() => setShowForm((show) => !show)}>Edit</button>
          <button onClick={() => deleteCabin(id)} disabled={isDeleting}>
            Delete
          </button>
        </div>
      </div>
      {showForm && <CreateCabinForm cabinToEddit={cabin} />}
    </>
  );
};

export default CabinRow;
