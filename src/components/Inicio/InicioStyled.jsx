import styled from "styled-components";

export const ContentInitial = styled.div`
  display: flex;
  gap: 30px;
  padding: 0 6rem 0px 3rem;

  @media (max-width: 968px) {
    flex-direction: column;
  }

  img {
    max-width: 100%;
    max-height: 60vh;
    width: auto;
    height: auto;
  }

  h3 {
    font-size: 20px;
  }

  .icons-position {
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
  }
`;
