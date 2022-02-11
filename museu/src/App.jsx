import './App.css'
import './reset.css'
import Header from './components/header/Header'
import Gallery from './components/gallery/Gallery'
import Title from './components/title/title'
import Ticket from './components/ticket/Ticket'
import Description from './components/description/Description'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <Title />
      <Description />
      <Footer />
    </div>
  )
}

export default App
