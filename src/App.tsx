import React from 'react'
import { MultilineTextInput, Container, Title } from './components/TextInput'
import TreeView from './components/DirectoryTreeView'
import Footer from './components/Footer'

const defaultValue =
  "['/bin','/boot','/dev','/etc','/home/user/dir1','/home/user/dir2','/lib','/lib64','/media','/mnt','/opt','/proc','/root','/run','/sbin','/srv','/sys','/tmp','/usr/bin','/usr/lib','/usr/local/bin','/usr/local/lib','/var/log','/var/tmp']"

const App: React.FC = () => {
  const [value, setValue] = React.useState(defaultValue)
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  return (
    <Container>
      <Title>Directory Visualizer</Title>
      <MultilineTextInput
        value={value}
        onChange={handleChange}
        placeholder='Enter an Array of Directories e.g. ["src/components", "public", "node_modules"]'
      />
      <TreeView pathString={value} />
      <Footer />
    </Container>
  )
}

export default App
