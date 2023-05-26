import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.itemCardColor};
  transition: 0.3s ease;
  align-items: start;
  cursor: pointer;

  h3 {
    word-break: break-all;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 2px 4px ${({ theme }) => theme.color.itemCardColor};
    margin-right: 1rem;

    @media (max-width: 576px) {
      font-size: ${({ theme }) => theme.typo.normalFontSize};
      font-weight: 700;
    }
  }

  &:hover {
    background: ${({ theme }) => theme.color.itemCardHover};
  }
`;

export const ScheduleDetail = styled.div`
  display: flex;
  width: 100%;
  padding: 0.3rem 0 0 0;
  align-items: end;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.textColor};

  span {
    text-align: right;

    @media (max-width: 576px) {
      font-size: ${({ theme }) => theme.typo.smallFontSize};
    }
  }
`;
