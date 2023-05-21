import styled from "styled-components/macro";

export const Wrapper = styled.div`
  position: relative;
  gap: 1rem;
  width: 47%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.itemCardColor};
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.itemCardHover};
    box-shadow: 0 2px 2px ${({ theme }) => theme.color.inputColor};
  }

  img {
    max-width: 100%;
  }

  h3 {
    font-size: var(--h3FontSize);
    color: var(--blackColor);
    word-break: break-all;
    word-wrap: break-word;
  }

  @media (max-width: 1200px) {
    width: 80%;
    margin-top: 1rem;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;
