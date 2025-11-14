export const copy = {
    es: {
        lang: "es",
        nav: { aboutUs: "¿Quiénes somos?", gallery: "Coreografías", dancers: "Bailarines", shows: "Competencias", contact: "Contacto", toggleLang: "ES" },
        hero: { title: "GRAVITY COMPANY" },
        aboutUs: { title: "¿Quiénes somos?", description: "Una compañía de danza creada en 2023. Buscamos formar bailarines completos, con una base sólida en contemporáneo y lyrical jazz, y un enfoque de entrenamiento que acompaña el crecimiento personal y artístico de cada integrante. Entrenamos todas las semanas para seguir evolucionando como grupo y como intérpretes. Nos gusta participar en competencias porque nos permiten mostrarnos, inspirarnos y seguir desafiándonos. Este año volvimos a presentar el Gravity Show, un espectáculo creado íntegramente por nosotros, y también seguimos produciendo videoclips, que forman parte de nuestro proceso creativo y de aprendizaje dentro de la compañía." },
        gallery: { title: "Coreografías" },
        dancers: { title: "Bailarines", subtitle: "Conocé a los intérpretes que dan vida a Gravity Company", role: { dancer: "Bailarina", director: "Directora"}},
        competitions: { title: "Competencias", cta: "Ver agenda completa", choreography: "Coreografía", awards: { featured: "Coreografía destacada", featured2: "Coreografía destacada por propuesta escénica", tecnique: "Mejor técnica", coach: "Mención de coach destacado para la coreógrafa" } },        
        footer: { company: "Gravity Company", contact: "Contacto", hire: "Contrataciones", rights: `© ${new Date().getFullYear()} Gravity Company. Todos los derechos reservados.` },
        join: { button: "Sumate", title: "Sumate a Gravity Company", subtitle: "Completá el formulario para audicionar y subí tu video contándonos quién sos.", name: "Nombre completo", email: "Email", video: "Link del video (YouTube / Drive)", message: "Mensaje opcional", sending: "Enviando...", sent: "¡Enviado!", error: "Error al enviar", submit: "Enviar" },
    },
    en: {
        lang: "en",
        nav: { aboutUs: "About Us",gallery: "Choreographies", dancers: "Dancers", shows: "Competitions", contact: "Contact",  toggleLang: "EN" },
        hero: { title: "GRAVITY COMPANY" },
        aboutUs: { title: "About Us", description: "We are a dance company founded in 2023. We aim to develop well-rounded dancers with a solid foundation in contemporary and lyrical jazz, and a training approach that supports the personal and artistic growth of each member. We train every week to continue evolving as a group and as performers. We enjoy participating in competitions because they allow us to showcase our talent, find inspiration, and keep challenging ourselves. This year, we presented again the Gravity Show, a performance created entirely by us, and we also keep on producing music videos, which are an integral part of our creative and learning process within the company." },
        gallery: { title: "Choreographies" },
        dancers: { title: "Dancers", subtitle: "Meet the performers who bring Gravity Company to life", role: { dancer: "Dancer", director: "Director"}},
        competitions: { title: "Competitions", cta: "See full calendar", choreography: "Choreography", awards: { featured: "Featured choreography", featured2: "Featured choreography for its stage presentation", tecnique: "Best technique", coach: "Outstanding coach award for the choreographer" } },
        footer: { company: "Gravity Company", contact: "Contact", hire: "Booking", rights: `© ${new Date().getFullYear()} Gravity Company. All rights reserved.` },
        join: { button: "Join", title: "Join Gravity Company", subtitle: "Fill out the audition form and upload your video telling us who you are.", name: "Full name", email: "Email", video: "Link of your video (YouTube / Drive)", message: "Optional message", sending: "Sending...", sent: "Sent!", error: "Error sending", submit: "Send" },
    },
} as const;