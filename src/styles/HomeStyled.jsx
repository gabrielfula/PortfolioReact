import styled from "styled-components";

export const Container = styled.section`
  padding-top: 23vh;
  width: 100%;
  height: 100%;

  @media (max-width: 968px) {
    padding-top: 9vh;
  }

  span {
    color: ${({ theme }) => theme.colors.pink};
  }

  h1 {
    font-size: 4rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Button = styled.a`
  padding: 7px 25px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  background: rgb(255, 0, 255);
  background: linear-gradient(
    96deg,
    rgba(255, 0, 255, 1) 26%,
    rgba(142, 5, 142, 1) 94%
  );

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.pink};
    transition: ease-in-out 1s;
  }
`;
