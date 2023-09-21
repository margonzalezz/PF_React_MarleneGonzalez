const CartWidget = () => {
    return <div>
        <button className="btn btn-outline-warning position-relative ">
            <i className="bi bi-cart-fill"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    2
                <span class="visually-hidden">productos en el carrito</span>
                </span>
        </button>
        </div>
}

export default CartWidget;