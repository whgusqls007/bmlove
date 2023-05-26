import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 70%;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-basis: 100%;
    width: 100%;
  }
`;
