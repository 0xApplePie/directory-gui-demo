import styled from 'styled-components'
import { colors } from '../styles/colors' // Import the color palette

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${colors.background}; // Use color from palette
`

export const Title = styled.h1`
  font-size: 2rem;
  color: ${colors.textColor}; // Use color from palette
  margin-bottom: 20px;
`
