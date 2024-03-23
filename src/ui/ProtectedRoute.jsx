import React, { useEffect } from "react";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  // get current user
  const { isLoading, isAuthenticated } = useUser();

  // if no user redirect to login
  // ai way te korle auto login page e jabe na jodi storage thke/User ke delet kore dei, tai uesEffect use korle isAuthenticated state change hole auto code fire hobe
  //   if (!isAuthenticated) {
  //     navigate("/login");
  //   }
  useEffect(() => {
    // jokhon login btn e click korbo tokhon spin loading dekhabe but tokhon o amra authenticated na tai se login page e redirect kore dibe, but user data thik e fetch hoy local storage e save korbe. kintu dash board e jabe na . tai !isLoading ke o include kora lageb --> jodi loading na thake and isAuthenticated false hoy tobei login page e naw.
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate, isLoading]);

  // while loading show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // if user then return the children
  if (isAuthenticated) return children;
};

export default ProtectedRoute;
