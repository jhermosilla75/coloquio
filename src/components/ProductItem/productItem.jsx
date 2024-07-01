function ProductItem (props){
    return(
        <div class="product-card">
            <img src={props.img} alt="Nombre del Producto"/>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <button onclick="onAddToCart()">Agregar al Carrito</button>
        </div>
    )
}

export {ProductItem}