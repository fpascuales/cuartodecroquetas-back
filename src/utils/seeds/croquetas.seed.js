const mongoose = require("mongoose")

const Croqueta = require("../../api/croquetas/croquetas.model")
const { log } = require("console")

require("dotenv").config()
const DB_URL = process.env.DB_URL

const croquetas = [
    {
        name: "Bacon y Dátiles",
        image: "https://res.cloudinary.com/dgkm71mjf/image/upload/v1680371252/cuarto_de_croquetas/isotipo_wfvdqy.png",
        description: "Nuestra croqueta de bacon y dátiles es una explosión de sabores dulces y salados en cada bocado. Con una capa crujiente por fuera y una textura suave y cremosa por dentro, esta croqueta combina trozos de bacon ahumado y dátiles jugosos y caramelizados con bechamel y queso.",
        price: 8,
        weight: "250 gr.",
        units: 6,
        category: "Carne",
        allergens: [
            {
                id: 1,
                type: "Gluten"
            },
            {
                id: 5,
                type: "Huevo"
            },           
            {
                id: 9,
                type: "Frutos Secos"
            },
            {
                id: 13,
                type: "Leche"
            },
            {
                id: 14,
                type: "Anhídrido Sulfuroso"
            }
        ],
        id: 1
    },
    {
        name: "Roquefort",
        image: "https://res.cloudinary.com/dgkm71mjf/image/upload/v1680371252/cuarto_de_croquetas/isotipo_wfvdqy.png",
        description: "Una explosión de sabor en cada bocado: nuestra croqueta de roquefort combina el intenso sabor del queso con la textura crujiente y suave de la masa, creando una experiencia gastronómica única.",
        price: 8,
        weight: "250 gr.",
        units: 6,
        category: "Queso",
        allergens: [
            {
                id: 1,
                type: "Gluten"
            },
            {
                id: 5,
                type: "Huevo"
            },
            {
                id: 9,
                type: "Frutos Secos"
            },
            {
                id: 13,
                type: "Leche"
            }
        ],
        id: 2
    },
    {
        name: "Jamón Ibérico",
        image: "https://res.cloudinary.com/dgkm71mjf/image/upload/v1680371252/cuarto_de_croquetas/isotipo_wfvdqy.png",
        description: "Nuestra croqueta de jamón ibérico es una deliciosa combinación de jamón de bellota ibérico, bechamel cremosa y una cobertura crujiente, que te transportará a los sabores de España con cada bocado.",
        price: 8,
        weight: "250 gr.",
        units: 6,
        category: "Carne",
        allergens: [
            {
                id: 1,
                type: "Gluten"
            },
            {
                id: 5,
                type: "Huevo"
            },
            {
                id: 13,
                type: "Leche"
            },
            {
                id: 14,
                type: "Anhídrido Sulfuroso"
            }
        ],
        id: 3
    },
    {
        name: "Puchero",
        image: "https://res.cloudinary.com/dgkm71mjf/image/upload/v1680371252/cuarto_de_croquetas/isotipo_wfvdqy.png",
        description: "¿Te gusta el sabor tradicional de la cocina casera? Prueba nuestra croqueta de puchero, que combina el sabor de la carne del puchero con una bechamel suave y cremosa, y una cobertura crujiente que te hará disfrutar de la auténtica comida de casa en cada bocado.",
        price: 8,
        weight: "250 gr.",
        units: 6,
        category: "Carne",
        allergens: [
            {
                id: 1,
                type: "Gluten"
            },
            {
                id: 5,
                type: "Huevo"
            },
            {
                id: 13,
                type: "Leche"
            },
            {
                id: 12,
                type: "Apio"
            },
            {
                id: 14,
                type: "Anhídrido Sulfuroso"
            }
        ],
        id: 4
    },
    {
        name: "Brócoli",
        image: "https://res.cloudinary.com/dgkm71mjf/image/upload/v1680371252/cuarto_de_croquetas/isotipo_wfvdqy.png",
        description: "¿Quieres probar algo diferente? Nuestra croqueta de brócoli es una opción saludable y deliciosa, que combina la suavidad del brócoli con una cremosa bechamel y una cobertura crujiente, creando una experiencia culinaria única en cada bocado.",
        price: 8,
        weight: "250 gr.",
        units: 6,
        category: "Verdura",
        allergens: [
            {
                id: 1,
                type: "Gluten"
            },
            {
                id: 5,
                type: "Huevo"
            },
            {
                id: 7,
                type: "Mostaza"
            },            
            {
                id: 9,
                type: "Frutos Secos"
            },
            {
                id: 10,
                type: "Soja"
            },
            {
                id: 12,
                type: "Apio"
            },
            {
                id: 13,
                type: "Leche"
            },
            {
                id: 14,
                type: "Anhídrido Sulfuroso"
            }
        ],
        id: 5
    },
    {
        name: "Espinacas y Parmesano",
        image: "https://res.cloudinary.com/dgkm71mjf/image/upload/v1680371252/cuarto_de_croquetas/isotipo_wfvdqy.png",
        description: "Descubre la combinación perfecta de espinacas frescas y queso parmesano en cada bocado con nuestras deliciosas croquetas caseras, una opción saludable y sabrosa para disfrutar en cualquier momento del día.",
        price: 8,
        weight: "250 gr.",
        units: 6,
        category: "Verdura",
        allergens: [
            {
                id: 1,
                type: "Gluten"
            },
            {
                id: 5,
                type: "Huevo"
            },          
            {
                id: 9,
                type: "Frutos Secos"
            },
            {
                id: 10,
                type: "Soja"
            },
            {
                id: 13,
                type: "Leche"
            },
            {
                id: 14,
                type: "Anhídrido Sulfuroso"
            }
        ],
        id: 6
    },
    {
        name: "Cola de Toro",
        image: "https://res.cloudinary.com/dgkm71mjf/image/upload/v1680371252/cuarto_de_croquetas/isotipo_wfvdqy.png",
        description: "Disfruta de una explosión de sabor andaluz en cada bocado con nuestras croquetas de cola de toro, una deliciosa opción para los amantes de la gastronomía española.",
        price: 8,
        weight: "250 gr.",
        units: 6,
        category: "Carne",
        allergens: [
            {
                id: 1,
                type: "Gluten"
            },
            {
                id: 5,
                type: "Huevo"
            },          
            {
                id: 12,
                type: "Apio"
            },
            {
                id: 13,
                type: "Leche"
            },
            {
                id: 14,
                type: "Anhídrido Sulfuroso"
            }
        ],
        id: 7
    },
    {
        name: "Boletus",
        image: "https://res.cloudinary.com/dgkm71mjf/image/upload/v1680371252/cuarto_de_croquetas/isotipo_wfvdqy.png",
        description: "Saborea la intensidad de nuestros boletus en cada bocado con nuestras deliciosas croquetas, una opción imprescindible para los amantes de los sabores naturales y auténticos.",
        price: 8,
        weight: "250 gr.",
        units: 6,
        category: "Verdura",
        allergens: [
            {
                id: 1,
                type: "Gluten"
            },
            {
                id: 5,
                type: "Huevo"
            },          
            {
                id: 9,
                type: "Frutos Secos"
            },
            {
                id: 13,
                type: "Leche"
            },
            {
                id: 14,
                type: "Anhídrido Sulfuroso"
            }
        ],
        id: 8
    },
    {
        name: "Arroz Negro",
        image: "https://res.cloudinary.com/dgkm71mjf/image/upload/v1680371252/cuarto_de_croquetas/isotipo_wfvdqy.png",
        description: "Deléitate con nuestra croqueta de arroz negro, crujiente por fuera y cremosa por dentro, con todo el sabor del mar en cada bocado.",
        price: 8,
        weight: "250 gr.",
        units: 6,
        category: "Pescado",
        allergens: [
            {
                id: 1,
                type: "Gluten"
            },
            {
                id: 2,
                type: "Crustáceos"
            },
            {
                id: 3,
                type: "Moluscos"
            },
            {
                id: 5,
                type: "Huevo"
            },
            {
                id: 13,
                type: "Leche"
            }
        ],
        id: 9
    },
    {
        name: "Cocido",
        image: "https://res.cloudinary.com/dgkm71mjf/image/upload/v1680371252/cuarto_de_croquetas/isotipo_wfvdqy.png",
        description: "Descubre el sabor de la tradición con nuestra croqueta de cocido, elaborada con los mejores ingredientes de la huerta y la carne más tierna, ¡una delicia en cada bocado!.",
        price: 8,
        weight: "250 gr.",
        units: 6,
        category: "Carne",
        allergens: [
            {
                id: 1,
                type: "Gluten"
            },
            {
                id: 5,
                type: "Huevo"
            },
            {
                id: 12,
                type: "Apio"
            },
            {
                id: 13,
                type: "Leche"
            }
        ],
        id: 10
    },
    {
        name: "Merluza Fresca",
        image: "https://res.cloudinary.com/dgkm71mjf/image/upload/v1680371252/cuarto_de_croquetas/isotipo_wfvdqy.png",
        description: "Su cremosidad y suave textura, combinada con el sabor de la merluza fresca y el toque cítrico del limón, hacen de esta croqueta un verdadero manjar para los amantes del pescado.",
        price: 8,
        weight: "250 gr.",
        units: 6,
        category: "Pescado",
        allergens: [
            {
                id: 1,
                type: "Gluten"
            },
            {
                id: 2,
                type: "Crustáceos"
            },
            {
                id: 3,
                type: "Moluscos"
            },
            {
                id: 4,
                type: "Pescado"
            },
            {
                id: 5,
                type: "Huevo"
            },
            {
                id: 13,
                type: "Leche"
            },
            {
                id: 14,
                type: "Anhídrido Sulfuroso"
            }
        ],
        id: 11
    },
    {
        name: "Bacalao, Ajo y Perejil",
        image: "https://res.cloudinary.com/dgkm71mjf/image/upload/v1680371252/cuarto_de_croquetas/isotipo_wfvdqy.png",
        description: "¡Prueba nuestra deliciosa croqueta de Bacalao! Elaborada con el mejor bacalao fresco de nuestras costas y un toque de ajo y perejil, esta croqueta es un homenaje a la tradición culinaria de nuestra tierra. ¡No te pierdas esta experiencia gastronómica única!",
        price: 8,
        weight: "250 gr.",
        units: 6,
        category: "Pescado",
        allergens: [
            {
                id: 1,
                type: "Gluten"
            },
            {
                id: 2,
                type: "Crustáceos"
            },
            {
                id: 3,
                type: "Moluscos"
            },
            {
                id: 4,
                type: "Pescado"
            },
            {
                id: 5,
                type: "Huevo"
            },
            {
                id: 13,
                type: "Leche"
            },
            {
                id: 14,
                type: "Anhídrido Sulfuroso"
            }
        ],
        id: 12
    },
    {
        name: "Pringá Casera",
        image: "https://res.cloudinary.com/dgkm71mjf/image/upload/v1680371252/cuarto_de_croquetas/isotipo_wfvdqy.png",
        description: "¿Has probado nuestra croqueta de Pringá casera? Una mezcla tradicional de carne de cerdo y vaca cocida lentamente, con un sabor auténtico y lleno de historia. ¡No te pierdas esta delicia andaluza!",
        price: 8,
        weight: "250 gr.",
        units: 6,
        category: "Carne",
        allergens: [
            {
                id: 1,
                type: "Gluten"
            },
            {
                id: 5,
                type: "Huevo"
            },
            {
                id: 12,
                type: "Apio"
            },
            {
                id: 13,
                type: "Leche"
            }
        ],
        id: 13
    },
    {
        name: "Calabacín",
        image: "https://res.cloudinary.com/dgkm71mjf/image/upload/v1680371252/cuarto_de_croquetas/isotipo_wfvdqy.png",
        description: "La croqueta de calabacín es una deliciosa opción vegetariana con un sabor suave y refrescante. El suave sabor del calabacín se combina perfectamente con el crujiente exterior de la croqueta y su interior cremoso. Es una excelente opción para aquellos que buscan una alternativa ligera y saludable.",
        price: 8,
        weight: "250 gr.",
        units: 6,
        category: "Verdura",
        allergens: [
            {
                id: 1,
                type: "Gluten"
            },
            {
                id: 5,
                type: "Huevo"
            },          
            {
                id: 9,
                type: "Frutos Secos"
            },
            {
                id: 13,
                type: "Leche"
            },
            {
                id: 14,
                type: "Anhídrido Sulfuroso"
            }
        ],
        id: 14
    },
    {
        name: "Gambas al ajillo",
        image: "https://res.cloudinary.com/dgkm71mjf/image/upload/v1680371252/cuarto_de_croquetas/isotipo_wfvdqy.png",
        description: "Esta croqueta de gambas al ajillo es una explosión de sabor en cada bocado, con un intenso sabor a ajo y el toque justo de picante que hará que tus papilas gustativas bailen de felicidad. Su textura crujiente por fuera y suave por dentro la hacen irresistible, convirtiéndola en la opción perfecta para cualquier amante de las gambas y el ajo. ¡No podrás resistirte a probarla!",
        price: 8,
        weight: "250 gr.",
        units: 6,
        category: "Pescado",
        allergens: [
            {
                id: 1,
                type: "Gluten"
            },
            {
                id: 2,
                type: "Crustáceos"
            },
            {
                id: 3,
                type: "Moluscos"
            },
            {
                id: 4,
                type: "Pescado"
            },
            {
                id: 5,
                type: "Huevo"
            },
            {
                id: 13,
                type: "Leche"
            },
            {
                id: 14,
                type: "Anhídrido Sulfuroso"
            }
        ],
        id: 15
    }
]

mongoose.connect(DB_URL).then(async () => {
    const croquetas = await Croqueta.find()
    if(croquetas.length){
        await Croqueta.collection.drop()
        console.log("ME HE COMIDO TODAS LAS CROQUETAS, YA NO QUEDAN EN LA BBDD");
    }
})
.catch((error) => console.log("ESTAS CROQUETAS ESTÁN CADUCADAS, ALGO SALIÓ MAL", error))
.then(async () => {
    await Croqueta.insertMany(croquetas)
    console.log("¡YA TENEMOS CROQUETAS RECIÉN HECHAS!");
})
.catch((error) => console.log("ESTAS CROQUETAS NO ESTABAN LISTAS PARA SERVIR, ALGO SALIÓ MAL", error))
.finally(() => mongoose.disconnect())