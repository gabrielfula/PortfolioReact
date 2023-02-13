import styled from "styled-components";

export const ContentProjetos = styled.div`
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 20px;
  }
`;

export const ProjetosGrid = styled.section`
  display: flex;
  justify-content: center;
  padding: 3rem;
  gap: 40px;
  width: 100%;
  flex: 1 200px;

  @media (max-width: 992px) {
    width: 300px;
    flex-wrap: wrap;
  }
`;

export const SpaceImage = styled.div`
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
