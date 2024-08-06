import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../styles/colors'

const WarningMessage = styled.div`
  color: ${colors.errorColor};
  font-weight: bold;
  margin-bottom: 10px;
`

const TextArea = styled.textarea<{ isValid: boolean }>`
  width: 100%;
  height: 200px;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${colors.lightBlueGrey};
  border-radius: 0.25rem;
  box-sizing: border-box;
  resize: vertical;
  background-color: ${colors.paleGreyBlue};
  color: ${colors.textColor};
  &:focus {
    outline: none;
    border-color: ${colors.borderColor};
    background-color: ${colors.white};
  }

  ${(props) =>
    !props.isValid &&
    `
      border-color: ${colors.errorColor};
      background-color: #fff0f0; /* Light red background for errors */
    `}
`

interface MultilineTextInputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
}

const unixPathRegex = /^\/([A-Za-z0-9_.-]+\/?)*$/

const validatePaths = (text: string): boolean => {
  const paths = text
    .slice(1, -1)
    .split("','")
    .map((line) => line.trim().replace(/^'|'$/g, ''))

  const allValid = paths.every((path) => unixPathRegex.test(path))
  return allValid
}

export const MultilineTextInput: React.FC<MultilineTextInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const isValid = validatePaths(value)

  return (
    <div>
      {!isValid && (
        <WarningMessage>Invalid Unix file paths detected!</WarningMessage>
      )}
      <TextArea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isValid={isValid}
      />
    </div>
  )
}
