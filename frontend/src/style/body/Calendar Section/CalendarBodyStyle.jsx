import styled, { css } from "styled-components/macro";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  &:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

export const Col = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Cell = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;

  span {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ValidDate = styled.span`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.inputText};
  transition: 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.color.hoverColor};
    border-radius: 5px;
  }

  ${(props) =>
    props.date === 0 &&
    css`
      color: red;
    `}

  ${(props) =>
    props.date === 6 &&
    css`
      color: blue;
    `}

  @media (max-width: 992px) {
    font-size: ${({ theme }) => theme.typo.smallFontSize};
  }

  @media (max-width: 576px) {
    font-size: ${({ theme }) => theme.typo.smallestFontSize};
    padding: 0;
  }
`;

export const NotValidDate = styled.span`
  font-weight: 600;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color.greyText};

  @media (max-width: 992px) {
    font-size: ${({ theme }) => theme.typo.smallFontSize};
  }

  @media (max-width: 576px) {
    font-size: ${({ theme }) => theme.typo.smallestFontSize};
    padding: 0;
  }
`;
