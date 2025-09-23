import './App.css'
import Titulo from './components/Titulo'
import Foto from './components/Foto'
import Campos from './components/Campos'
import Botao from './components/Botao'

function App() {
  // useEffect(() => {
  //   fetch('https://rickandmortyapi.com/api')
  //     .then(res => console.log('res'))
  //     .catch(error => console.log('error'))
  // }, []);
  return (
    <>
      <Titulo />

      <Foto />

      <Campos />

      <Botao />
    </>
  )
}

export default App

// const [count, setCount] = useState(0)


// <button onClick={() => setCount((count) => count + 1)}> count is {count} </button>