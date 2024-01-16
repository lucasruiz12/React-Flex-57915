import './App.css'
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <ItemListContainer greeting='Bienvenidos a Musica del Alma'/>
    </div>
  )
}

export default App
