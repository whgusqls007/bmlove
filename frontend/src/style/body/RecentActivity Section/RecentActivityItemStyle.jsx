import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.itemCardColor};
  transition: 0.3s ease;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 2px 4px ${({ theme }) => theme.color.itemCardColor};
    margin-right: 1rem;

    @media (max-width: 768px) {
      width: 55px;
      height: 55px;
    }
  }

  &:hover {
    background: ${({ theme }) => theme.color.itemCardHover};
  }
`;

export const ItemDetail = styled.div`
  flex: 1;

  span {
    font-size: ${({ theme }) => theme.typo.h3FontSize};
    font-weight: 600;
    color: ${({ theme }) => theme.color.blackColor};
    display: block;
  }

  small {
    font-size: ${({ theme }) => theme.typo.smallFontSize};
    font-weight: 600;
    color: ${({ theme }) => theme.color.textColor};
  }
`;

export const Date = styled.div`
  font-size: ${({ theme }) => theme.typo.smallestFontSize};
  font-weight: 500;
  color: ${({ theme }) => theme.color.textColor};
`;
