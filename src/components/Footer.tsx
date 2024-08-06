import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/colors'

const FooterContainer = styled.footer`
  padding: 1rem;
  margin-top: 1rem;
  background-color: ${colors.white};
  color: ${colors.white};
  text-align: center;
  bottom: 0;
  border-radius: 5px;
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
