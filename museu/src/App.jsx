import './App.css'
import Header from './components/header/Header'
import Painting from './components/paintings/Painting'
import Title from './components/title/title'
import Description from './components/description/Description'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Painting />
      <Title />
      <Description />
      <Footer />
    </div>
  )
}

export default App
