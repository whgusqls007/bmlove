import styled, { css } from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
`;

export const HeaderMonth = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Month = styled.div`
  display: flex;
  align-items: end;
  flex-basis: 100%;

  h1 {
    font-size: ${({ theme }) => theme.typo.h1FontSize};
    font-weight: 700;
    padding: 0 1.5rem;

    @media (max-width: 1200px) {
      font-size: ${({ theme }) => theme.typo.h2FontSize};
    }

    @media (max-width: 576px) {
      font-size: ${({ theme }) => theme.typo.h3FontSize};
    }
  }

  span {
    padding: 0 1.5rem;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    font-size: ${({ theme }) => theme.typo.h3FontSize};
    background: transparent;
    padding: 0.5rem 0.5rem;
    margin: 0 1rem;
    transition: 0.3s ease;
    border: 0px;
  }

  @media (max-width: 992px) {
    justify-content: space-between;
  }
`;

export const HeaderDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
`;

export const Date = styled.div`
  width: 100%;
  border: 1px solid black;
  padding: 0.3rem 0;
  text-align: center;
  font-weight: 600;

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

  &:not(:first-child) {
    border-left: 0px;
  }

  &:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  @media (max-width: 992px) {
    font-size: ${({ theme }) => theme.typo.smallFontSize};
  }

  @media (max-width: 576px) {
    font-size: ${({ theme }) => theme.typo.smallestFontSize};
  }
`;
