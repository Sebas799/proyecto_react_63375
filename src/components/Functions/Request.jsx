const apiURL = "https://fakestoreapi.com/products";

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al obtener los datos");
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
};


export const pedirItemId = (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Producto no encontrado");
            }
            return response.json();
        })
        .catch((error) => {
            throw new Error(error,"Producto no encontrado");
        });
};
