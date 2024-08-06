import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../styles/colors'

const WarningMessage = styled.div`
  color: ${colors.errorColor}; // Use color from palette
  font-weight: bold;
  margin-bottom: 10px;
`

const TextArea = styled.textarea<{ isValid: boolean }>`
  width: 90%; /* Increase width for better visibility */
  max-width: 600px; /* Add a maximum width to prevent it from becoming too wide on large screens */
  height: 200px; /* Increase height to accommodate more text */
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${colors.lightBlueGrey}; // Use color from palette
  border-radius: 0.25rem;
  box-sizing: border-box;
  resize: vertical;
  background-color: ${colors.paleGreyBlue}; // Use color from palette
  color: ${colors.textColor}; // Use color from palette

  &:focus {
    outline: none;
    border-color: ${colors.borderColor}; // Use color from palette
    background-color: ${colors.white}; // Use color from palette
  }

  ${(props) =>
    !props.isValid &&
    css`
      border-color: ${colors.errorColor}; // Use color from palette
      background-color: #fff0f0; // Light red background for errors
    `}
`

interface MultilineTextInputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
}

const unixPathRegex = /^\/([A-Za-z0-9_.-]+\/?)*$/

const validatePaths = (text: string): boolean => {
  const paths = text.split('\n').map((line) => line.trim())
  return paths.every((path) => unixPathRegex.test(path))
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
