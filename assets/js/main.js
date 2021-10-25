const posts = [
    {
        id: 0,
        contenuto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, temporibus optio aperiam quibusdam ipsum doloremque praesentium voluptas nemo numquam iste?",
        immagine: "https://picsum.photos/id/1/200/300",
        autore: {
            nome: "Phil Mangione",
            avatar: "https://picsum.photos/id/2/200/300"
        },
        n_likes: 80,
        data_creazione: new Date("2020, 11")

    },

    {
        id: 1,
        contenuto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, iste!",
        immagine: "https://picsum.photos/id/162/200/300",
        autore: {
            nome: "Sofia Perlari",
            avatar: "https://picsum.photos/id/36/200/300"
        },
        n_likes: 112,
        data_creazione: new Date("2021, 06")

    },

    {
        id: 2,
        contenuto: "lLorem ipsum dolor sit amet consectetur adipisicing elit. Id aperiam esse odio officia ut quam aspernatur, velit atque, inventore sapiente optio possimus. Delectus at suscipit obcaecati sint libero cum quisquam fugit distinctio atque mollitia minima ratione, ipsam exercitationem sit magnam nemo. Perferendis porro earum tenetur, officiis praesentium itaque in. Facere?",
        immagine: "https://picsum.photos/id/145/200/300",
        autore: {
            nome: "Giuseppe Pizzitola",
            avatar: "https://picsum.photos/id/5/200/300"
        },
        n_likes: 45,
        data_creazione: new Date("2021, 08")

    }

]


// console.log(posts);
// console.log(posts[1]["autore"]["nome"]);


createPost(posts);





function monthDiff(dateFrom) {
    const current_data = new Date;
    return current_data.getMonth() - dateFrom.getMonth() +
        (12 * (current_data.getFullYear() - dateFrom.getFullYear()))
}

function createPost(posts) {

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        let post_element =
            `<div class="col-6 my-3">
                    <div class="post p-3">
                        <div class="autore d-flex">
                            <div class="image_wrapper">
                                <img src="${post["autore"]["avatar"]}" alt="">
                            </div>
                            <div class="details mx-4">
                                <div class="name">${post["autore"]["nome"]}</div>
                                <div class="date_post">${monthDiff(posts[i].data_creazione)} mesi fa</div>
                            </div>

                        </div>
                        <div class="content my-3">
                            <p class="content-text">${post["contenuto"]}</p>
                            <div class="content_img">
                                <img src="${post["immagine"]}" alt="">
                            </div>
                        </div>
                        <div class="row like p-3">
                            <div class="col-6 text-center">
                                <button id="like_button"> <i class="fas fa-thumbs-up"></i> Mi Piace</button>
                            </div>
                            <div class="col-6 text-center">
                                <div>Piace a <span class="n_likes">${post["n_likes"]}</span> persone</div>
                            </div>
                        </div>
                    </div>
                </div>`
        document.querySelector(".row").insertAdjacentHTML("beforeend", post_element)

    }

}