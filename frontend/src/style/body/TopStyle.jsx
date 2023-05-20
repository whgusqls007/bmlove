import styled from "styled-components/macro";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.typo.h1FontSize};
    color: ${({ theme }) => theme.color.blackColor};
    font-weight: 700;
  }

  p {
    font-size: ${({ theme }) => theme.typo.normalFontSize};
    color: ${({ theme }) => theme.color.textColor};
    font-weight: 500;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.color.whiteColor};
  border-radius: 5px;
  gap: 1rem;
  box-shadow: 0 2px 4px ${({ theme }) => theme.color.inputColor};

  input {
    border: none;
    outline: none;
    background: none;
  }

  .icon {
    color: ${({ theme }) => theme.color.textColor};
    &:hover {
      color: ${({ theme }) => theme.color.primaryColor};
    }
  }
`;

export const User = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;

  .icon {
    font-size: ${({ theme }) => theme.typo.biggestFontSize};
    background: ${({ theme }) => theme.color.whiteColor};
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0 2px 4px ${({ theme }) => theme.color.inputColor};
    color: ${({ theme }) => theme.color.textColor};
  }

  .userImage {
    border: 3px solid ${({ theme }) => theme.color.whiteColor};
    border-radius: 10px;
    width: 2.5rem;
    overflow: hidden;
    box-shadow: 0 2px 4px ${({ theme }) => theme.color.inputColor};

    img {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  gap: 1rem;

  @media (max-width: 1400px) {
    flex-direction: column;
  }
`;

export const RightCard = styled.div`
  display: flex;
  position: relative;
  flex-basis: 70%;
  height: 200px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  padding: 2rem;
  border-radius: 1rem;
  overflow: hidden;

  h1,
  p {
    z-index: 100;
  }

  h1 {
    font-size: ${({ theme }) => theme.typo.h1FontSize};
    color: ${({ theme }) => theme.color.whiteColor};
    font-weight: 800;
  }

  p {
    padding: 1rem;
    color: ${({ theme }) => theme.color.paleGreen};
    font-weight: 500;
  }

  @media (max-width: 1400px) {
    width: 80%;
  }

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: ${({ theme }) => theme.typo.h1FontSize};
    color: ${({ theme }) => theme.color.whiteColor};
    font-weight: 800;
  }

  p {
    padding: 1rem;
    color: ${({ theme }) => theme.color.paleGreen};
    font-weight: 500;
  }

  .btn {
    z-index: 100;
    box-shadow: none;
    padding: 0.8rem 1.5rem;
    color: ${({ theme }) => theme.color.primaryColor};
    border-radius: 2px solid transparent;
  }

  .transparent {
    background: none;
    border: 2px solid ${({ theme }) => theme.color.paleGreen};
    color: ${({ theme }) => theme.color.paleGreen};

    &:hover {
      background: ${({ theme }) => theme.color.paleGreen};
      color: ${({ theme }) => theme.color.primaryColor};
    }
  }
`;

export const VideoBox = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LeftCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;

  @media (max-width: 1400px) {
    width: 100%;
    justify-content: center;
    flex-basis: 100%;
    margin-top: 2rem;
    height: 10px !important;
  }

  @media (max-width: 576px) {
    margin-top: 0.5rem;
  }
`;

export const LeftCard = styled.div`
  display: flex;
  flex-basis: 50%;
  align-items: center;
  position: relative;
  padding: 1rem;
  height: 200px;
  border-radius: 1rem;
  justify-content: space-between;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.color.paleGreen};
    left: 0;
    bottom: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    @media (max-width: 576px) {
      border-radius: 10px;
    }

    @media (max-width: 350px) {
      height: 80%;
      bottom: 10%;
    }
  }

  @media (max-width: 992px) {
    padding: 0;
    flex-basis: 65%;
  }

  @media (max-width: 768px) {
    flex-basis: 50%;
  }

  @media (max-width: 576px) {
    flex-basis: 70%;
    justify-content: center;
  }

  @media (max-width: 350px) {
    flex-basis: 100%;
  }
`;

export const Text = styled.div`
  z-index: 100;

  h1 {
    font-size: ${({ theme }) => theme.typo.h1FontSize};
    padding-bottom: 1rem;
    color: ${({ theme }) => theme.color.blackColor};

    @media (max-width: 768px) {
      padding-left: 0.5rem;
    }

    @media (max-width: 576px) {
      padding-left: 0;
      font-size: ${({ theme }) => theme.typo.h3FontSize};
    }
  }

  @media (max-width: 1400px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 3rem;
  }

  @media (max-width: 1200px) {
    padding-left: 1.5rem;
  }

  @media (max-width: 1100px) {
    padding-left: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 576px) {
    padding: 0;
  }

  .flex {
    gap: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.blackColor};
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    small {
      font-size: ${({ theme }) => theme.typo.normalFontSize};
      display: block;
      color: ${({ theme }) => theme.color.primaryColor};
      font-weight: 500;
      padding: 0.5rem 0;

      @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.typo.smallFontSize};
      }

      @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.typo.smallestFontSize};
      }

      @media (max-width: 350px) {
        padding: 0;
      }
    }

    @media (max-width: 1400px) {
      font-size: ${({ theme }) => theme.typo.h2FontSize};
      padding-left: 5rem;
    }

    @media (max-width: 1200px) {
      padding-left: 3rem;
    }

    @media (max-width: 1100px) {
      padding-left: 2rem;
    }

    @media (max-width: 992px) {
      padding-left: 2rem;
    }

    @media (max-width: 768px) {
      padding-left: 1rem;
      font-size: ${({ theme }) => theme.typo.normalFontSize};
    }

    @media (max-width: 576px) {
      padding-left: 0;
      font-size: ${({ theme }) => theme.typo.smallFontSize};
      gap: 0.5rem;
    }
  }
`;

export const ImageBox = styled.div`
  transform: translate(-10px, 0px);

  img {
    width: 200px;
    height: 270px;
    border-radius: 10px;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;
