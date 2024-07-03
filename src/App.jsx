import { ProductItem } from "./components/productItem";
import Pelota from "./assets/Pelota.webp";
import { Comment } from "./components/comment";
import { Modal } from "./components/modal"
import { AlertButton } from "./components/AlertButton"

function App() {
  return (
  
    <div>
      <Comment
        username="jvrhermosilla"
        content="Hola, buenas noches este es solo un comentario"
        date="10-06-2024"
      />

      <ProductItem name="pelota" price=" $ 100" img={Pelota} />
      <div>
      <AlertButton />
      </div>
      <div>
      <Modal title="Modal" content="Agregar al Carrito a la pelota:"/>
      </div>
    </div>
  );

 
}

export default App;
