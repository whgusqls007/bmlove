import styled from "styled-components/macro";

export const Wrapper = styled.div`
  flex-basis: 70%;

  @media (max-width: 992px) {
    flex-basis: 50%;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    width: 100%;
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
