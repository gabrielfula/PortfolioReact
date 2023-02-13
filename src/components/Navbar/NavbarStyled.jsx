import styled from "styled-components";

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
  z-index: 999;

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
    align-items: center;
    position: fixed;
    top: 5vh;
    height: 100vh;
    width: 100vw;
    background: ${({ theme }) => theme.colors.black40};
  }
`;

export const Hamburguer = styled.div`
  display: none;
  position: fixed;
  right: 20px;
  cursor: pointer;

  @media (max-width: 968px) {
    display: block;
  }
`;

export const Logo = styled.a`
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 3px;
`;
