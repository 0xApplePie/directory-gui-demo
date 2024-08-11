import React, { useState } from 'react'
import styled from 'styled-components'
import { TreeNodeProps } from '../types/types'

const NodeContent = styled.div`
  display: flex;
  align-items: center;
`

const NodeContainer = styled.div<{ level: number }>`
  padding-left: ${({ level }) => level * 1.5}rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;

  &:focus {
    background-color: #e0e0e0;
  }
`

const CollapsibleIcon = styled.span`
  width: 1.5rem;
  text-align: center;
`

const NodeName = styled.span`
  font-size: 1rem;
  color: #333;
`

const TreeNode: React.FC<TreeNodeProps> = ({ node, level = 0 }) => {
  const [collapsed, setCollapsed] = useState(true)

  const handleToggle = () => {
    setCollapsed(!collapsed)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleToggle()
    } else if (
      event.key === 'ArrowRight' &&
      collapsed &&
      node.children.length > 0
    ) {
      setCollapsed(false)
    } else if (event.key === 'ArrowLeft' && !collapsed) {
      setCollapsed(true)
    }
  }

  return (
    <li>
      <NodeContainer
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        level={level}
        tabIndex={0}
      >
        <CollapsibleIcon>
          {node.children.length > 0 && (collapsed ? '▶' : '▼')}
        </CollapsibleIcon>
        <NodeContent>
          {level > 0 && '└\u00A0'} {/* non breaking space character*/}
          <NodeName> {node.name}</NodeName>
        </NodeContent>
      </NodeContainer>
      {!collapsed &&
        node.children.map((child, index) => (
          <TreeNode key={index} node={child} level={level + 1} />
        ))}
    </li>
  )
}

export default TreeNode
