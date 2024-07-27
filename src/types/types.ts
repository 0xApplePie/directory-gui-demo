export type Directory = {
  name: string
  children: Directory[]
}

export type TreeNodeProps = {
  node: Directory
}
