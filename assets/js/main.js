const posts = [
    {
        id: 0,
        contenuto: "lorem",
        immagine: "https://picsum.photos/id/1/200/300",
        autore: {
            nome: "Nome Autore",
            avatar: "https://picsum.photos/id/2/200/300"
        },
        n_likes: 50,
        data_creazione: "data"

    },

    {
        id: 1,
        contenuto: "lorem ipsum",
        immagine: "https://picsum.photos/id/1/200/300",
        autore: {
            nome: "Gigi",
            avatar: "https://picsum.photos/id/5/200/300"
        },
        n_likes: 80,
        data_creazione: "ora vediamo"

    }

]

console.log(posts);
console.log(posts[1]["autore"]["nome"]);