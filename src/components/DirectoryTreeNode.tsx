import React, { useState } from 'react'
import styled from 'styled-components'
import { TreeNodeProps } from '../types/types'

const NodeContent = styled.div`
  display: flex;
  align-items: center;
`

// Container for each node with indentation based on level
const NodeContainer = styled.div<{ level: number }>`
  padding-left: ${({ level }) => level * 1.5}rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`

// Separate container for the icon to ensure consistent alignment
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

  return (
    <div>
      <NodeContainer onClick={handleToggle} level={level}>
        <CollapsibleIcon>
          {node.children.length > 0 && (collapsed ? '▶' : '▼')}
        </CollapsibleIcon>
        <NodeContent>
          {level > 0 && '└\u00A0'} {/* non breaking space char*/}
          <NodeName> {node.name}</NodeName>
        </NodeContent>
      </NodeContainer>
      {!collapsed &&
        node.children.map((child, index) => (
          <TreeNode key={index} node={child} level={level + 1} />
        ))}
    </div>
  )
}

export default TreeNode
