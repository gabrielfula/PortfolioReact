import styled from "styled-components";

export const ContentTec = styled.div`

  background: ${({ theme }) => theme.colors.secundary};
  width: 100%;
  justify-content: center;
  margin-top: 3.5rem;
  padding: 20px;

  .content-projetos {
    display: flex;
    justify-content: space-around;
    padding-top: 5rem;
    gap: 5rem;

    @media (max-width: 968px) {
      flex-direction: column;
    }
  }

  .left-text {
    text-align: center;

    p {
      color: ${({ theme }) => theme.colors.gray};
      padding-top: 4rem;
    }
  }

  .align-text {
    display: flex;
    justify-content: center;
  }

  .icons {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;
  }

  .content-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.pink};
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 6px;
    height: 130px;
    width: 200px;
    flex: 1 200px;

    @media (max-width: 992px) {
      width: 100px;
    }
    
  }
`;
