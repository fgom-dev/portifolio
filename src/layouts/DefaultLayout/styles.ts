import styled from 'styled-components'

export const LayoutContainer = styled.div`
  padding: 1rem 2.5rem;
  height: 100vh;

  background: ${(props) => props.theme['gray-800']};

  display: flex;
  flex-direction: column;
`
