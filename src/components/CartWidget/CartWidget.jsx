import React from 'react'

const CartWidget = () => {
    return (
        <><header>

            <div className="d-flex align-items-center" />
            <a href="#" className="btn btn-outline-primary position-relative">
                <i className="bi bi-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    3
                </span>
            </a>


        </header>
        </>
    )
}

export default CartWidget