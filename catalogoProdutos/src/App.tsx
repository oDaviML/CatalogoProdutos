import './App.css'
import ProdutosCard from './components/produtosCard'
import HeaderMenu from './components/header'

function App() {
 
  return (
    <>
      <HeaderMenu />
      <div className='ProdutosContainer'>
        <ProdutosCard />
      </div>
    </>
  )
}

export default App
