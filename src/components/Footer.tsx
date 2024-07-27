import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem;
  background-color: #282c34;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 0;
`

const FooterLink = styled.a`
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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
          View on Sourcecode on GitHub
        </FooterLink>
      </p>
    </FooterContainer>
  )
}

export default Footer
