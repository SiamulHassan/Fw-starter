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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins } from "../../services/apiCabins";
const CabinRow = ({ cabin }) => {
  const { name, maxCapacity, regularPrice, discount, image, id } = cabin;
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (cabinId) => deleteCabins(cabinId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: (err) => alert(err.message),
  });
  return (
    <div role="row" className={styles["table-row"]}>
      <img src={image} alt="cabin img" className={styles["cabin-img"]} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <button onClick={() => mutate(id)} disabled={isDeleting}>
        Delete
      </button>
    </div>
  );
};

export default CabinRow;
