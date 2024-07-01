
import { ProductItem } from './components/ProductItem/productItem'
import Pelota from './assets/Pelota.webp';



function App() {
  
  return (
    <div>
      <ProductItem name="pelota" price="100" img={Pelota}/>   
          
    </div>
  )
}

export default App
