import styled from "styled-components";

export const ContentModal = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.secundary};
  height: 60vh;
  width: 85%;
  z-index: 999;
  bottom: 80%;
  border-radius: 10px;
  transition: all 1s;

  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: auto;
    width: 55%;
  }
`;

export const ModalStyle = styled.div`
  position: absolute;
  left: 1%;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const ContentApi = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  section {
    display: flex;
    gap: 5rem;

    @media (max-width: 992px) {
      flex-direction: column;
      justify-content: center;
    }
  }

  h2 {
    line-height: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    text-align: center;

    @media (max-width: 992px) {
      justify-content: center;
    }

    padding: 0 4rem 0 4rem;

    video {
      width: 140%;
      border-radius: 7px;

      @media (max-width: 992px) {
        width: 80%;
      }
    }
  }
`;

export const ButtonModal = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 8rem;
  gap: 2rem;
  width: 100%;

  @media (max-width: 992px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-right: 0;
  }
`;
