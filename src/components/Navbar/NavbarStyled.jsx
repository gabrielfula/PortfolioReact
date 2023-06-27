import styled, { css } from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  height: 7vh;
  color: ${({ theme }) => theme.colors.grey};
  padding: 7px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  z-index: 1000;

  li {
    list-style: none;
  }
`;

export const MenuStyled = styled.ul`
  display: flex;
  gap: 5rem;

  a {
    padding: 7px 10px;
    color: ${({ theme }) => theme.colors.gray};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.pink};
      transition: ease-in-out 0.5s;
    }

    @media (max-width: 968px) {
      font-size: 17px;
    }
  }

  @media (max-width: 968px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    height: ${({ show }) => (show ? "100vh" : "0")};
    transition: 1s;
    align-items: center;
    position: fixed;
    top: 5vh;
    width: 100vw;
    background: ${({ theme }) => theme.colors.black40};
  }
`;

export const Logo = styled.a`
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 3px;
`;

export const Hamburguer = styled.div`
  display: none;
  position: fixed;
  top: 1rem;
  right: 2rem;
  cursor: pointer;

  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-self: center;
  }

  .line1,
  .line3 {
    width: 20px;
    height: 2px;
    background: ${({ theme }) => theme.colors.white};
  }

  .line2 {
    width: 50%;
    height: 2px;
    background: ${({ theme }) => theme.colors.white};
  }

  ${({ show }) =>
    show &&
    css`
      .line1 {
        position: absolute;
        top: 7px;
        right: 2px;
        transform: ${({ show }) => (show ? "rotate(47deg)" : "rotate(0)")};
        transition: 1s;
      }

      .line2 {
        visibility: ${({ show }) => (show ? "hidden" : "visible")};
        top: 7px;
        right: 2px;
      }

      .line3 {
        position: absolute;
        transform: ${({ show }) => (show ? "rotate(-47deg)" : "rotate(0)")};
        transition: .5s; 
        top: 7px;
        right: 2px;
    `}
`;
