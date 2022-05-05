import './App.css'
import { Header } from './components/Header'
import { Paintings } from './components/Paintings'
import { Title } from './components/Title'
import { Description } from './components/Description'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Paintings />
      <Title />
      <Description />
      <Footer />
    </div>
  )
}

export default App
