import styled from "styled-components";

export const ContentProjetos = styled.section`
  height: 100%;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    padding-top: 30rem;
    gap: 10rem;
  }
`;

export const Sticky = styled.div`
  position: sticky;
  top: 4rem;
  text-align: center;
  font-size: 1.5rem;
  z-index: 10;
`;
