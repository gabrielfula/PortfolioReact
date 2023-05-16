import styled from "styled-components";

export const ContentModal = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.black40};
  height: 70vh;
  width: 85%;
  z-index: 1001;
  bottom: 70%;
  border-radius: 10px;
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
  }

  div {
    text-align: center;
    padding: 10px;
    img {
      width: 50%;
    }
  }
`;
