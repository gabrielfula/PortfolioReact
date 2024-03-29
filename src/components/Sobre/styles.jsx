import styled from "styled-components";

export const ContentAbout = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100vh;

  @media (max-width: 960px) {
    height: 100%;
    padding-top: 3rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-left: 2.5rem;
    position: relative;

    &::after {
      position: absolute;
      left: 0;
      content: "";
      width: 3px;
      top: 0;
      bottom: 1rem;
      background: ${({ theme }) => theme.colors.pink};
    }
  }

  li {
    display: flex;
    gap: 10px;
    flex-direction: column;
    position: relative;
    background: ${({ theme }) => theme.colors.secundary};
    padding: 7px;
    border-radius: 5px;
    width: 80%;
    font-size: 12px;

    &::after {
      position: absolute;
      content: "";
      left: -2.3rem;
      top: 0;
      height: 3px;
      width: 36px;
      background: ${({ theme }) => theme.colors.pink};
      border-radius: 100px;
    }
  }
  span {
    color: ${({ theme }) => theme.colors.pink};
  }

  div {
    display: flex;
    justify-content: center;

    @media (max-width: 992px) {
      font-size: 10px;
      flex-direction: column;
      padding: 1rem;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 1px;
  text-align: center;

  @media (max-width: 992px) {
    /* padding-top: 4rem; */
  }
`;

export const TextAbout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  line-height: 1.1rem;
  width: 40%;

  @media (max-width: 992px) {
    width: 100%;
  }

  @media (max-width: 992px) {
    width: 100%;
  }

  p {
    font-size: 17px;
    color: ${({ theme }) => theme.colors.gray};

    @media (max-width: 992px) {
      font-size: 14px;
    }
  }
`;
