import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  background: ${({ theme }) => theme.color.whiteColor};
  box-shadow: 1px 0px 4px ${({ theme }) => theme.color.greyText};
  width: 18%;
  height: 100%;
  gap: 3rem;
  overflow: auto;
  align-items: normal;

  a {
    display: flex;
    align-items: center;
    padding: 1.5rem 1.5rem 0;

    img {
      max-width: 60px;
      margin-right: 0.5rem;
      background: ${({ theme }) => theme.color.inputColor};
      border-radius: 2px;
      padding: 0.2rem;
    }

    h2 {
      font-size: ${({ theme }) => theme.typo.h1FontSize};
      color: ${({ theme }) => theme.color.primaryColor};
    }
  }

  @media (max-width: 1200px) {
    a {
      img {
        max-width: 40px;
      }

      h2 {
        font-size: ${({ theme }) => theme.typo.h2FontSize};
      }
    }
  }

  @media (max-width: 992px) {
    padding-bottom: 2rem;
    a {
      img {
        max-width: 30px;
      }

      h2 {
        font-size: ${({ theme }) => theme.typo.h3FontSize};
      }
    }
  }

  @media (max-width: 768px) {
    a {
      img {
        max-width: 60px;
      }

      h2 {
        display: none !important;
      }
    }
  }
`;

export const Menu = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.typo.h3FontSize};
    color: ${({ theme }) => theme.color.blackColor};
    padding: 0 1.5rem 1.5rem;
  }

  ul {
    display: grid;
    align-items: center;
    gap: 1.5rem;

    li {
      padding: 0.2rem 1.5rem;
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

  @media (max-width: 992px) {
    h3 {
      text-align: center;
    }
    ul {
      justify-content: center;
      li {
        a {
          .icon {
            font-size: ${({ theme }) => theme.typo.h1FontSize};
          }

          span {
            display: none !important;
          }
        }
      }
    }
  }
`;
