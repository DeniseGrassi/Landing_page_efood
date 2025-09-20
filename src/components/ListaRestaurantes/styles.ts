import styled from 'styled-components'


export const CardContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--page-gap);
`

export const Lista = styled.ul`
  list-style: none;
  margin: 32px 0 64px;
  padding: 0;

  display: grid;
  gap: var(--card-gap);


  grid-template-columns: repeat(2, minmax(320px, 1fr));
  justify-content: center;


  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`
