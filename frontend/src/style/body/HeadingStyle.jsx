import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h1 {
    font-size: ${({ theme }) => theme.typo.h2FontSize};
    color: ${({ theme }) => theme.color.blackColor};
    font-weight: 700;
  }

  button {
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    padding-left: 3px;
    border-radius: 5px;

    &:hover {
      border: 1px solid ${({ theme }) => theme.color.primaryColor};
      transition: 0.5s ease;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;
