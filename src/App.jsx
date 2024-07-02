import { ProductItem } from "./components/productItem";
import Pelota from "./assets/Pelota.webp";
import { Comment } from "./components/comment";
import { Modal } from "./components/modal"

function App() {
  return (
    //este codigo es para componente Comment
    <div>
      <Comment
        username="jvrhermosilla"
        content="Hola, buenas noches este es solo un comentario"
        date="10-06-2024"
      />

      <ProductItem name="pelota" price=" $ 100" img={Pelota} />
      <Modal title="Modal" content="Este es un modal" />
    </div>
  );

  // este codigo es para componente productItem

  // )
}

export default App;
