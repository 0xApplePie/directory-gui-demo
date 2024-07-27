import React, { useState } from 'react'
import styled from 'styled-components'
import { TreeNodeProps } from '../types/types'

const NodeContainer = styled.div`
  margin-left: 1rem;
  cursor: pointer;
`

const TreeNode: React.FC<TreeNodeProps> = ({ node }) => {
  const [collapsed, setCollapsed] = useState(true)

  const handleToggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <NodeContainer>
      <div onClick={handleToggle}>
        {node.children.length > 0 && (collapsed ? '▶ ' : '▼ ')}
        {node.name}
      </div>
      {!collapsed &&
        node.children.map((child, index) => (
          <TreeNode key={index} node={child} />
        ))}
    </NodeContainer>
  )
}

export default TreeNode
