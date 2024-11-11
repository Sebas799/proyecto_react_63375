import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { pedirItemId } from '../Functions/Request';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const { itemId } = useParams(); 
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        pedirItemId(Number(itemId))
            .then((res) => setItem(res))
            .catch((err) => setError(err));
    }, [itemId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {item ? <ItemDetail item={item} /> : <div className='d-flex justify-content-center'>
            <div className='fs-5 fw-bold'>Cargando producto...</div></div>}
        </div>
    );
};

export default ItemDetailContainer;
