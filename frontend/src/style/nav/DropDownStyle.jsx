import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  top: 35px;
  left: 30px;
  z-index: 1000;
  background: transparent;
  color: ${({ theme }) => theme.color.textColor};
  width: 82%;

  .icon {
    font-size: 40px;
  }
`;

export const DropdownWrapper = styled.div`
  display: grid;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.whiteColor};
  box-shadow: 1px 0px 4px ${({ theme }) => theme.color.greyText};
  width: 100%;
  height: 47%;
  align-items: normal;
  padding: 1rem 0 1.5rem 1rem;
  transition: 0.3s ease;
  overflow: auto;

  @keyframes dropdown {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: dropdown 0.4s ease;
`;

export const Menu = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.typo.h3FontSize};
    color: ${({ theme }) => theme.color.blackColor};
    padding: 1.5rem 1.5rem 1.5rem;
  }

  ul {
    display: grid;
    align-items: center;
    gap: 1.5rem;

    li {
      padding: 0.2rem 1.5rem 0rem;
      width: 100%;
      position: relative;

      &::before {
        position: absolute;
        content: "";
        height: 0%;
        left: 0;
        width: 5px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 5px;
        background-color: ${({ theme }) => theme.color.primaryColor};
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
        height: 100%;
        transition: 0.3s ease;
      }
    }
  }
`;
