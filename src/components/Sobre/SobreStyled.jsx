import styled from "styled-components";

export const ContentAbout = styled.section`
  background: ${({ theme }) => theme.colors.secundary};
  padding: 5rem 4rem 0 4rem;

  section {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    gap: 8rem;
    text-align: center;
    font-size: 16px;

    @media (max-width: 968px) {
      display: block;
      flex-direction: column;
    }

    span {
      color: ${({ theme }) => theme.colors.pink};
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  letter-spacing: 1px;
  text-align: center;
`;

export const TextAbout = styled.div`
  padding-top: 30px;
  text-align: center;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Animation = styled.div`
  padding: 20px;
  width: 100%;
`;
