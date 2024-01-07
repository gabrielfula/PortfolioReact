import styled from "styled-components";

export const ContentTec = styled.section`
  width: 100%;
  justify-content: center;
  margin-top: 3.5rem;
  padding: 20px;

  h2 {
    text-align: center;
    padding-top: 2rem;
  }
`;

export const PositionIcons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.pink};
    background: ${({ theme }) => theme.colors.secundary};
    border-radius: 6px;
    height: 130px;
    width: 200px;
    flex: 1 200px;

    p {
      color: ${({ theme }) => theme.colors.white};
      display: none;
    }

    @media (max-width: 992px) {
      width: 100px;
    }
  }
`;

export const ContentIcons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5rem 3rem;
  gap: 5rem;

  @media (max-width: 968px) {
    flex-direction: column;
  }

  div {
    text-align: center;

    span {
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;
