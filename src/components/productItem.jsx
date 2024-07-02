import React from "react";

function ProductItem(props) {
  return (
    <div className="product-card box">
      <figure className="image is-128x128" style={{ margin: "0 auto" }}>
        <img src={props.img} alt="Nombre del Producto" />
      </figure>
      <div className="has-text-centered">
      <p className="title is-4" style={{ fontWeight: 'bold' }}>{props.name}</p>
            <p className="subtitle is-5">{props.price}</p>
            <button onClick={() => onAddToCar(props.name)} className="button is-primary">
                Agregar al Carrito
            </button>

      </div>
    </div>
  );
}

function onAddToCar(productName) {
  document.querySelector('.modal').classList.add("is-active");
}

export { ProductItem };
