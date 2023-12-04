import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  gap: 30px;
  justify-content: space-around;
  align-items: center;
  height: 100vh;

  @media (max-width: 968px) {
    flex-direction: column;
  }

  img {
    max-width: 100%;
    max-height: 60vh;
    width: auto;
    height: auto;
    border-radius: 5px;
  }

  h3 {
    font-size: 20px;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 2rem;

  a {
    color: ${({ theme }) => theme.colors.white} !important;

    :hover {
      color: ${({ theme }) => theme.colors.pink} !important;
      transition: 1s;
    }
  }
`;

export const TextInicio = styled.div`
  display: flex;
  flex-direction: column;

  padding: 3rem 2rem;

  h1 {
    font-size: 3rem;
    span {
      color: ${({ theme }) => theme.colors.pink};
    }
  }
`;
