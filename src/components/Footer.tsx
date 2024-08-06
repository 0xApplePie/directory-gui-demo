import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/colors'

const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem;
  background-color: ${colors.textColor};
  color: ${colors.white};
  text-align: center;
  bottom: 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`

const FooterLink = styled.a`
  color: ${colors.borderColor};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    color: ${colors.errorColor};
  }
`

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>
        <FooterLink
          href='https://github.com/0xApplePie/directory-gui-demo'
          target='_blank'
          rel='noopener noreferrer'
        >
          View Sourcecode on GitHub
        </FooterLink>
      </p>
    </FooterContainer>
  )
}

export default Footer
