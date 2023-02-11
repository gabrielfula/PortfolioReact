import styled from "styled-components";

export const ContentAbout = styled.section`
  background: ${({ theme }) => theme.colors.secundary};
  padding: 5rem 4rem 0 4rem;

  .text-title,
  .text-subtitle {
    display: flex;
    justify-content: center;
    letter-spacing: 1px;
    text-align: center;
  }

  .about-text {
    padding-top: 30px;
    text-align: center;

    p {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray};
    }
  }

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

    .education {
      padding: 20px;
    }
  }
`;
