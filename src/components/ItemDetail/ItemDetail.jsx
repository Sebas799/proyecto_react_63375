import React from "react";
import "../ItemDetail/ItemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <div className=" d-flex justify-content-center container my-5">
        <div className="card mb-3 shadow">
          <div className="row g-0">

            <div className="col-md-4">
              <img
                src={item.image}
                className="card-img img-fluid rounded-start"
                alt={item.title}
              />
            </div>

            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text fw-bold">${item.price}</p>

                <div className="d-flex justify-content-center">
                    <button className="btn w-50 btn-primary">Agregar al Carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
