document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".nav .menu a");
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    // Resaltar la sección activa
    window.addEventListener("scroll", () => {
        const fromTop = window.scrollY;
        menuLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            if (
                section.offsetTop <= fromTop + 100 &&
                section.offsetTop + section.offsetHeight > fromTop + 100
            ) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const menuToggle = document.querySelector(".menu-toggle");
        const menu = document.querySelector(".menu");
    
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    });

    // Abrir y cerrar el menú en móviles
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});


// Datos de los certificados
const certificados = [
    {
        id: "https://app.aluracursos.com/certificate/1095ac86-5224-4862-bdce-97c1223b40fd",
        image: "assets/cert1.svg",
        nombre: "Aplicando la Orientación a Objetos"
    },
    {
        id: "https://app.aluracursos.com/certificate/b50d468e-4854-4021-a5c7-e16b760fb400",
        image: "assets/cert2.svg",
        nombre: "Java: creando tu primera API y conectándola al Front End"
    },
    {
        id: "https://app.aluracursos.com/certificate/bd781122-a98e-4c08-93fe-c49e6a415e19",
        image: "assets/cert3.svg",
        nombre: "Spring Boot 3: desarrollar una API Rest en Java"
    },
    {
        id: "https://app.aluracursos.com/certificate/c9b7c542-b963-4123-b688-13bb5c9b32ce",
        image: "assets/cert4.svg",
        nombre: "Spring AI: Integra una aplicación con OpenAI"
    },
    {
        id: "https://talkingmethod.com/es/certificate/oscar-ramirez-ojeda-6152/?shared=true",
        image: "assets/ingl.svg",
        nombre: "Certificado Inglés: Talking Method"
    },
    {
        id: "https://app.aluracursos.com/program/certificate/65c64787-11f9-4c9d-9013-4100b4418e24",
        image: "assets/oracle-one.svg",
        nombre: "Oracle Next Education: Back-end"
    },
    {
        id: "assets/certificates.pdf",
        image: "assets/alura.svg",
        nombre: "Certificados Completos: Alura"
    }    
];

// Seleccionar el contenedor de certificados
const contenedorCertificados = document.querySelector("#contenedorCertificados");

// Crear dinámicamente los certificados
certificados.forEach(cert => {
    // Crear enlace
    const enlace = document.createElement("a");
    enlace.href = `${cert.id}`;
    enlace.target = "_blank";

    // Crear imagen
    const imagen = document.createElement("img");
    imagen.src = cert.image;
    imagen.alt = cert.nombre;

    // Crear texto del nombre
    const nombre = document.createElement("p");
    nombre.textContent = cert.nombre;

    // Agregar elementos al enlace
    enlace.appendChild(imagen);
    enlace.appendChild(nombre);

    // Agregar enlace al contenedor
    contenedorCertificados.appendChild(enlace);
});


//Datos de los proyectos
const proyectos = [
    {
        id: "https://github.com/Oscar1999-L/encriptador-de-texto.git",
        image: "assets/decodificador.png",
        descripcion: "Este es un proyecto de encriptador y desencriptador de texto creado con HTML,"
        +" CSS y JavaScript. La aplicación permite transformar vocales en sus respectivas representaciones encriptadas según reglas preestablecidas.",
        nombre: "Decodificador de Texto"
    },
    {
        id: "https://github.com/Oscar1999-L/conversorDeDivisas.git",
        image: "assets/conversor.png",
        descripcion: "Este es un sencillo programa de consola que permite convertir entre diferentes divisas utilizando la API de ExchangeRate y creado con Java.",
        nombre: "Conversor de Divisas"
    },
    {
        id: "https://github.com/Oscar1999-L/LiterAlura.git",
        image: "assets/literalura.png",
        descripcion: "Este programa es una aplicación que permite gestionar autores y libros, proporcionando funcionalidades para buscar información, listar datos y "+
        "manejar relaciones entre autores y sus obras. Utilizando Java, Spring Boot, PostgresSQL.",
        nombre: "Literalura: API de librería virtual"
    },
    {
        id: "https://github.com/Oscar1999-L/Foro-hub.git",
        image: "assets/spring.png",
        descripcion: "La API proporciona operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar publicaciones en la plataforma. Además, implementa medidas "+
        "de seguridad utilizando Spring Security y validaciones mediante tokens JWT para verificar la validez de los usuarios. Utilizando las tecnologías de Java, Spring boot, MySQL.",
        nombre: "Foro Hub"
    },
    {
        id: "",
        image: "assets/logos/python.png",
        descripcion: "Esta es una aplicación web basada en Python como estructura principal y HTML, JavaScript y CSS como front. Esta aplicación cuenta con diferentes herramientas de procesamiento de pdf," +
            " conversor de xml a pdf, un firmado automático, procesador de colores, entre otras herramientas. Esta aplicación es privada por lo que no puedo poner su enlace.",
        nombre: "CONVERSOR PDF"
    },
    ]

    // Seleccionar el contenedor de proyectos
const contenedorProyectos = document.querySelector("#contenedorProyectos");

// Crear dinámicamente los proyectos
proyectos.forEach(proy => {
    // Crear enlace
    const enlace = document.createElement("a");
    enlace.href = proy.id;
    enlace.target = "_blank";

    // Crear imagen
    const imagen = document.createElement("img");
    imagen.src = proy.image;
    imagen.alt = proy.nombre;

    // Crear contenedor de texto
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");

    // Crear título
    const nombre = document.createElement("h2");
    nombre.textContent = proy.nombre;

    // Crear descripción
    const descripcion = document.createElement("p");
    descripcion.textContent = proy.descripcion;

    // Agregar título y descripción al contenedor de texto
    textContainer.appendChild(nombre);
    textContainer.appendChild(descripcion);

    // Agregar imagen y contenedor de texto al enlace
    enlace.appendChild(imagen);
    enlace.appendChild(textContainer);

    // Agregar enlace al contenedor de proyectos
    contenedorProyectos.appendChild(enlace);
});


//Datos de los conocimientos
const conocimientos = [
    {
        image: "assets/logos/java.png",
        nombre: "Java"
    },
    {
        image: "assets/logos/spring.svg",
        nombre: "Spring Boot"
    },{
        image: "assets/logos/openai.svg",
        nombre: "OpenaAI"
    },{
        image: "assets/logos/html.svg",
        nombre: "HTML"
    },{
        image: "assets/logos/css.svg",
        nombre: "CSS"
    },{
        image: "assets/logos/javascript.svg",
        nombre: "JavaScript"
    },{
        image: "assets/logos/mysql.svg",
        nombre: "MySQL"
    },{
        image: "assets/logos/github.svg",
        nombre: "GitHub"
    },{
        image: "assets/logos/Linux.png",
        nombre: "Servidores Linux"
    },{
        image: "assets/logos/php.png",
        nombre: "PHP"
    },{
        image: "assets/logos/scriptcase.png",
        nombre: "Scriptcase"
    }
]

const contenedorConocimientos = document.querySelector("#contenedorConocimientos");

conocimientos.forEach(cono =>{
    
    const seccion = document.createElement("div");
    seccion.classList.add("conocimiento-item");

    const imagen = document.createElement("img");
    imagen.src = cono.image;
    imagen.alt = cono.nombre;

    const nombre = document.createElement("p");
    nombre.textContent = cono.nombre;

    seccion.appendChild(imagen);
    seccion.appendChild(nombre);

    contenedorConocimientos.appendChild(seccion);
});
