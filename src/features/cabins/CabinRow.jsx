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
import { HiSquare2Stack, HiPencil, HiTrash } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import styles from "./CabinRow.module.css";
import CreateCabinForm from "./CreateCabinForm";
import { useState } from "react";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";
const CabinRow = ({ cabin }) => {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isLoading, createCabin } = useCreateCabin();

  const {
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
    id,
    created_at,
  } = cabin;
  const handleDuplicate = () => {
    // console.log("you clicked");
    createCabin({
      name: `copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  };
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
          <button disabled={isLoading} onClick={handleDuplicate}>
            <HiSquare2Stack />
          </button>
          <button onClick={() => setShowForm((show) => !show)}>
            <HiPencil />
          </button>
          <button onClick={() => deleteCabin(id)} disabled={isDeleting}>
            <HiTrash />
          </button>
        </div>
      </div>
      {showForm && <CreateCabinForm cabinToEddit={cabin} />}
    </>
  );
};

export default CabinRow;
