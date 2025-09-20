import Header from '../../components/Header'
import ListaRestaurantes from '../../components/ListaRestaurantes'
import Footer from '../../components/Footer'
import { Container, Content } from '../../styles'

export default function HomePage() {
  return (
    <Container>
      <Header />        
      <Content role="main">
        <ListaRestaurantes />
      </Content>
      <Footer />
    </Container>
  )
}
