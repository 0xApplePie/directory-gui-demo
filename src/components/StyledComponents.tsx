import styled from 'styled-components'
import { colors } from '../styles/colors'

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  background-color: ${colors.background};
  padding: 20px;
  box-sizing: border-box;
`

export const Title = styled.h1`
  font-size: 2rem;
  color: ${colors.textColor};
  margin-bottom: 20px;
  flex: 0 0 auto;
  text-align: center;
  width: 100%;
`
