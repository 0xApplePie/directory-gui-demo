import React from 'react'
import TreeNode from './DirectoryTreeNode'
import { Directory } from '../types/types'

type TreeViewProps = {
  pathString: string
}

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
    <div>
      {treeData.map((node, index) => (
        <>
          <TreeNode key={index} node={node} />
        </>
      ))}
    </div>
  )
}

export default TreeView
