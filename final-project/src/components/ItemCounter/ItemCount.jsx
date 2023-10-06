import { useState } from "react";

const ItemCount = ({onAdd, initial = 0}) => {
    const [count, setCount] = useState(initial);

    const aumentar = () => {
        setCount( count +1 );
    };

    const reducir = () => {
        if (count > 0)
        setCount( count -1);
    };

    return (
        <div className="mb-3">
            <div className="d-flex align-items-center mt-4 counter-container">
                <button onClick={reducir}>-</button>
                <p className="mx-2 mt-3 badge text-bg-light"> Cantidad: {count}</p>
                <button onClick={aumentar}>+</button>

                {count > 0 ?
                    <button className="agregar-carrito" onClick={() => onAdd(item, selectedQuantity)}> Agregar al Carrito </button> :
                    <button className="agregar-carrito" disabled onClick={() => onAdd(item, -selectedQuantity)}> Agregar al Carrito </button>}
                
            </div>
        </div>
    );
};

export default ItemCount;