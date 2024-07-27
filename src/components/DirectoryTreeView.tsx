import React from 'react'
import TreeNode from './DirectoryTreeNode'
import { Directory } from '../types/types'
import { styled } from 'styled-components'

type TreeViewProps = {
  pathString: string
}

const TreeViewContainer = styled.div`
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #333;
  margin-top: 10px;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
`

const parsePaths = (pathString: string): string[] => {
  try {
    const cleanedString = pathString.replace(/^\['/, '').replace(/'\]$/, '')
    const paths = cleanedString.split("','")
    return paths
  } catch (e) {
    console.error('Invalid path string format', e)
    return []
  }
}

const transformToTree = (paths: string[]): Directory[] => {
  const root: Directory = { name: '', children: [] }

  paths.forEach((path) => {
    const parts = path.split('/').filter(Boolean)
    let currentLevel = root.children

    parts.forEach((part) => {
      let existingPath = currentLevel.find((dir) => dir.name === part)
      if (!existingPath) {
        existingPath = { name: part, children: [] }
        currentLevel.push(existingPath)
      }
      currentLevel = existingPath.children
    })
  })

  return root.children
}

const TreeView: React.FC<TreeViewProps> = ({ pathString }) => {
  const paths = parsePaths(pathString)
  const treeData = transformToTree(paths)

  return (
    <TreeViewContainer>
      {treeData.map((node, index) => (
        <>
          <TreeNode key={index} node={node} />
        </>
      ))}
    </TreeViewContainer>
  )
}

export default TreeView
