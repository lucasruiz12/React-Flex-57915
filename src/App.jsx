import './App.css'
import Contador from './Components/Contador'
import Header from './Components/Header'
import Mensaje from './Components/Mensaje'

function App() {
  //Ejemplo spread operator
  
  let verduras = ['lechuga', 'cebolla', 'tomate']
  let frutas = ['frutillas', 'sandia', 'melon']

  let verduleria = [...verduras, ...frutas]

  let estudiante = {
    name: 'Rodolfo',
    curso: 'React Flex',
    status: 'in progress'
  }

  let usuario = {
    ...estudiante,
    mail: 'rodolfo@gmail.com',
    pass: 'react-123'
  }

  console.log(verduleria)
  console.log(usuario)

  
  //Ejemplo desestructuración
  let [verdura1, verdura2, verdura3] = verduras
  //Es lo mismo que:
  // let verdura1 = verduras[0] 
  // let verdura2 = verduras[1] 
  // let verdura3 = verduras[2]

  console.log(verdura1, verdura2, verdura3)

  let {name, mail, status} = usuario
  //Esto es lo mismo que: 
  // let name = usuario.name
  // let mail = usuario.mail
  // let status = usuario.status

  console.log(name, mail, status)

  return (
    <div className="App">
      {/* Ejemplo componente */}
      <Header/>

      {/* Ejemplo Componentes y props */}
      <Mensaje usuario='Ezequiel' curso='React Flex'/>
      <Mensaje usuario={usuario.name} curso={usuario.curso}/>
      <Mensaje usuario='Neuyin'/>

      {/* Ejemplo useState */}
      <Contador/>
    </div>
  )
}

export default App
