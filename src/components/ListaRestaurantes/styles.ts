import styled from "styled-components";

export const CardContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Lista = styled.ul`
  list-style: none;
  margin: 32px 0 64px;
  padding: 0;

  display: grid;
  gap: 24px;

 
  grid-template-columns: repeat(auto-fit, minmax(320px, 360px));
  justify-content: center; 

  @media (max-width: 768px) {
    grid-template-columns: minmax(260px, 1fr); 
  }
`;
