import Container from 'react-bootstrap/Container'
import { HeaderContent } from './components/containers/Header/HeaderContent'
import { MainContent } from './components/containers/Main/MainContent'

function App() {

  return (
      <Container className='justify-content-center'>
        <HeaderContent onClick={() => location.reload()} />
        <MainContent />
      </Container>
  )
}

export default App
