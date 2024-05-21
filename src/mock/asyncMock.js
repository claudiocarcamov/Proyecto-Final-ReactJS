// create array with 5 products with id, name, price and image

const products = [
    {
      id: 1,
      title: "Baby Yoda",
      price: 20500,
      description:
        "El yoda bebé como siempre lo quisiste!",
      image: "https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      stock: 3,
      category: "objetosrandom",
    },
    {
      id: 2,
      title: "Goku",
      price: 15600,
      description:
        "El hombre más fuerte del universo supersayayin",
      image:
        "https://images.pexels.com/photos/16075339/pexels-photo-16075339/free-photo-of-munecas-juguetes-fondo-gris-fondo-de-pantalla-para-el-movil.jpeg",
      stock: 4,
      category: "anime"
    },
    {
      id: 3,
      title: "Pedro Picapiedra",
      price: 15990,
      description:
        "El mejor amigo de Pablo Mármol molesto como siempre",
      image: "https://images.pexels.com/photos/12221566/pexels-photo-12221566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      stock: 4,
      category: "clasicos",
    },
    {
      id: 4,
      title: "Mario Bross",
      price: 10500,
      description:
        "El mismo Mario de siempre pero de forma cuadrada",
      image: "https://images.pexels.com/photos/7772530/pexels-photo-7772530.jpeg",
      stock: 7,
      category: "clasicos",
    },
    {
      id: 5,
      title:
        "FunkoPop",
      price: 17000,
      description:
        "Para coleccionar y tener muchos más",
      image: "https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg",
      stock: 10,
      category: "objetosrandom",
    },
    {
      id: 6,
      title:
        "Chucky",
      price: 13000,
      description:
        "Más terrorífico que nunca. Ese Chucky da mucho miedo!!!",
      image: "https://images.pexels.com/photos/6471231/pexels-photo-6471231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      stock: 1,
      category: "muyextranos",
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 3000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((product) => product.id === id));
      }, 3000);
    });
  };
  
  export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((product) => product.category === category));
      }, 3000);
    });
  };