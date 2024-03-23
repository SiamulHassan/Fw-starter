import styled from "styled-components";
import { format, isToday } from "date-fns";
import { HiDotsVertical } from "react-icons/hi";
import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;
// we are taking booking props and immediately destructing it and about the guests and cabins are also same taking guests and immediately destructing it.
function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();
  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>
      <span style={{ position: "relative" }}>
        <HiDotsVertical
          style={{ cursor: "pointer", fontSize: "2rem" }}
          onClick={() => setShowDetails(!showDetails)}
        />
        {showDetails && (
          <>
            <span
              onClick={() => navigate(`/bookings/${bookingId}`)}
              style={{
                backgroundColor: "var(--color-grey-50)",
                color: "black",
                padding: "1rem",
                position: "absolute",
                right: "3rem",
                width: "11rem",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              See Details
            </span>
            {status === "unconfirmed" && (
              <span
                onClick={() => navigate(`/checkin/${bookingId}`)}
                style={{
                  backgroundColor: "var(--color-grey-50)",
                  color: "black",
                  padding: "1rem",
                  position: "absolute",
                  top: "5rem",
                  right: "3rem",
                  width: "11rem",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Check In
              </span>
            )}
          </>
        )}
      </span>
    </Table.Row>
  );
}

export default BookingRow;
