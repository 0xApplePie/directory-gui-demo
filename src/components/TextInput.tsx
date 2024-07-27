import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`

const TextArea = styled.textarea`
  width: 80%;
  height: 150px;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  box-sizing: border-box;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`

interface MultilineTextInputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
}

export const MultilineTextInput: React.FC<MultilineTextInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <TextArea value={value} onChange={onChange} placeholder={placeholder} />
  )
}
