import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 1rem;

    a {
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      color: ${(props) => props.theme['gray-400']};

      transition: border-bottom 0.2s;
      &:hover {
        border-bottom: 2px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
