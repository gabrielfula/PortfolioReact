import styled from "styled-components";

export const ContentProjetos = styled.div`
  padding: 10px 10px 0 10px;
  text-align: center;

  div {
    padding-top: 10px;
  }
  h1 {
    font-size: 20px;
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ProjetosGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 5rem;
  justify-content: center;
  gap: 40px;
  width: 100%;

  div {
    text-align: center;
    opacity: 1;

    h3 {
      color: ${({ theme }) => theme.colors.white20};
      font-size: 25px;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 5px;

      &:hover {
        opacity: 0.5;
        transform: scale(1.2);
        transition: 1s;
      }
    }

    div {
      padding-bottom: 1rem;
    }
  }
`;

export const AlignText = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const TextProjects = styled.div`
  padding-top: 20px;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray};
    padding-top: 10px;
  }
`;

export const ButtonPosition = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.2rem;
  gap: 30px;
`;
