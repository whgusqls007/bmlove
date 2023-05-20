import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 1000;
  color: ${({ theme }) => theme.color.textColor};
  background: ${({ theme }) => theme.color.whiteColor};
  width: 100%;
  justify-content: end;
  max-height: 300px;
  overflow: scroll;
`;

export const MenuTitle = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon {
    margin-right: 2rem;
    font-size: 30px;
    min-width: 30px;
  }
`;

export const Menu = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.typo.h3FontSize};
    color: ${({ theme }) => theme.color.blackColor};
    padding: 1.5rem 1.5rem 1.5rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-direction: column;

    &:last-child {
      padding-bottom: 1.5rem;
    }

    li {
      padding: 0rem 1.5rem 0rem;
      width: 100%;
      position: relative;
      cursor: pointer;

      &::before {
        position: absolute;
        content: "";
        height: 0;
        left: 0;
        width: 0;
        top: 100%;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 5px;
        background-color: ${({ theme }) => theme.color.whiteColor};
      }

      a {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.color.greyText};
        font-weight: 500;
        transition: 0;
        padding: 0.7rem 0.5rem;

        .icon {
          font-size: ${({ theme }) => theme.typo.h2FontSize};
          cursor: pointer;
          margin-right: 0.5rem;
        }
      }

      &:hover a {
        color: ${({ theme }) => theme.color.primaryColor};
        transition: 0;
      }

      &:hover::before {
        height: 2%;
        width: 100%;
        transition: 0.3s ease;
        background-color: ${({ theme }) => theme.color.primaryColor};
      }
    }
    @keyframes dropdown {
      0% {
        opacity: 0;
        transform: translateY(-100%);
      }
      80% {
        opacity: 0.3;
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    animation: dropdown 0.4s ease;
  }
`;
