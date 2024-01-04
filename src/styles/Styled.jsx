import styled from "styled-components";

export const Button = styled.a`
  padding: 7px 25px;
  border: none;
  text-align: center;
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
