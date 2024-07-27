import React, { useState } from 'react'
import styled from 'styled-components'
import { TreeNodeProps } from '../types/types'

const NodeContainer = styled.div`
  margin-left: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`

const CollapsibleIcon = styled.span`
  margin-right: 0.5rem;
  display: inline-block;
  width: 1rem;
  text-align: center;
`

const NodeName = styled.span`
  font-size: 1rem;
  color: #333;
`

const TreeNode: React.FC<TreeNodeProps> = ({ node }) => {
  const [collapsed, setCollapsed] = useState(true)

  const handleToggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div>
      <NodeContainer onClick={handleToggle}>
        {node.children.length > 0 && (
          <CollapsibleIcon>{collapsed ? '▶' : '▼'}</CollapsibleIcon>
        )}
        <NodeName>{node.name}</NodeName>
      </NodeContainer>
      {!collapsed &&
        node.children.map((child, index) => (
          <TreeNode key={index} node={child} />
        ))}
    </div>
  )
}

export default TreeNode
