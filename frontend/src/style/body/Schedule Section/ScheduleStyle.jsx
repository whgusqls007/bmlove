import styled from "styled-components/macro";

export const Wrapper = styled.div`
  flex-basis: 50%;

  @media (max-width: 768px) {
    flex-basis: 80%;
    width: 100%;
  }

  @media (max-width: 576px) {
    flex-basis: 100%;
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-left: 10%;
  }

  @media (max-width: 576px) {
    margin-left: 0;
  }
`;
