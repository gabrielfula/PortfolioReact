import styled from "styled-components";

export const ContentAbout = styled.section`
  display: flex;
  background: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  padding: 0 2rem 1rem 0;
  align-items: center;
  gap: 4rem;

  @media (max-width: 992px) {
    font-size: 10px;
    padding: 5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-left: 2.5rem;
    position: relative;

    &::after {
      position: absolute;
      left: 0;
      content: "";
      width: 3px;
      top: 6px;
      height: 25rem;
      background: ${({ theme }) => theme.colors.pink};

      @media (max-width: 992px) {
        height: 40rem;
      }
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
    font-size: 14px;

    &::after {
      position: absolute;
      content: "";
      left: -2.3rem;
      top: 6px;
      height: 3px;
      width: 36px;

      background: ${({ theme }) => theme.colors.pink};
      border-radius: 100px;
    }
  }
  span {
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  letter-spacing: 1px;
  text-align: center;
`;

export const TextAbout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  line-height: 1.1rem;
  width: 50%;

  p {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray};

    @media (max-width: 992px) {
      font-size: 14px;
    }
  }
`;
