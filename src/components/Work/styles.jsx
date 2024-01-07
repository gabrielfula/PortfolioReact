import styled from "styled-components";

export const ContainerProjeto = styled.section`
  flex: 1;
  

  div {
    display: flex;
    justify-content: center;
    gap: 5rem;

    @media (max-width: 968px) {
      gap: 1rem;
    }

    img {
      border-radius: 7px;
      object-fit: contain;

      @media (max-width: 968px) {
        width: 100%;
      }
    }
  }
`;

export const DescProjeto = styled.section`
  display: flex;
  gap: 2rem;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  margin: 0 5rem;
  padding: 5rem;

  @media (max-width: 968px) {
    margin: 0 1rem;
    padding: 5rem;
  }

  .text {
    display: flex;
    flex-direction: column;
    width: 100%;

    .title {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.pink};
    }

    div {
      @media (max-width: 968px) {
        font-size: 0.8rem;
        flex-direction: column;
      }
    }

    .desc {
      color: ${({ theme }) => theme.colors.gray};
      font-size: 1rem;

      @media (max-width: 968px) {
        font-size: 0.8rem;
      }
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 968px) {
    padding: 5rem 3rem;
    width: auto;
    flex-direction: column;
  }
`;
