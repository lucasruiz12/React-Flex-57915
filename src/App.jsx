import './App.css'
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'
import CountriesList from './Components/CountriesList'
import ParentComponent from './Components/ParentComponent'
import ChildComponent from './Components/ChildComponent'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <ItemListContainer greeting='Bienvenidos a Musica del Alma'/>

      <CountriesList/>

      <ParentComponent>
        {(texto, setTexto) => {
         return <div>
            <h1>Esto es el contenido de Parent</h1>
            <h4>{texto}</h4>
            <ChildComponent/>
          </div>
        }}
      </ParentComponent>

    </div>
  )
}

export default App
