import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import { useNavigate } from "react-router-dom";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const { id, status: bookingStatus } = booking;
  // const status = "checked-in";
  const navigate = useNavigate();
  const moveBack = useMoveBack();
  if (isLoading) return <Spinner />;
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{id}</Heading>
          <Tag type={statusToTagName[bookingStatus]}>
            {bookingStatus?.replace("-", " ")}
          </Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      {bookingStatus === "unconfirmed" && (
        <span
          onClick={() => navigate(`/checkin/${id}`)}
          style={{
            backgroundColor: "var(--color-grey-50)",
            color: "black",
            padding: "1rem",
            position: "absolute",
            top: "5rem",
            right: "3rem",
            width: "11rem",
            borderRadius: "3px",
            border: "1px solid #444",
            cursor: "pointer",
          }}
        >
          Check In
        </span>
      )}
      <ButtonGroup>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
