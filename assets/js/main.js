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
            avatar: ""
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
            avatar: "https://picsum.photos/id/36/200/300"
        },
        n_likes: 45,
        data_creazione: new Date("2021, 08")

    },

    {
        id: 3,
        contenuto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem autem recusandae mollitia tempore vel ut delectus omnis, sit minima eos illo repellendus, officiis quidem",
        immagine: "https://picsum.photos/id/236/200/300",
        autore: {
            nome: "Tiziano Nicolai",
            avatar: ""
        },
        n_likes: 21,
        data_creazione: new Date("2021, 9")

    },

]


// console.log(posts);
// console.log(posts[1]["autore"]["nome"]);


createPost(posts);
const image_wrapper_element = document.getElementsByClassName("image_wrapper")
const buttons_like_element = document.getElementsByClassName("like_button")

for (let i = 0; i < buttons_like_element.length; i++) {
    const button_like = buttons_like_element[i]
    button_like.addEventListener("click", pressLike)

}

function pressLike() {
    const postId = this.getAttribute("data-post-id");
    const counterLikeEl = document.getElementById("like-counter-" + postId);

    if (this.classList.contains("liked")) {
        this.classList.remove("liked")
        counterLikeEl.innerHTML = parseInt(counterLikeEl.innerHTML) - 1

    } else {
        this.classList.add("liked");
        counterLikeEl.innerHTML = parseInt(counterLikeEl.innerHTML) + 1
    }

}

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    if (post["autore"]["avatar"] == "") {
        image_wrapper_element.item(i).innerHTML = "";
        image_wrapper_element.item(i).insertAdjacentHTML("beforeend", post.autore.nome[0]);
        image_wrapper_element.item(i).insertAdjacentHTML("beforeend", post.autore.nome[iniziali(post.autore.nome)]);
        image_wrapper_element.item(i).style.width = "50px"
        image_wrapper_element.item(i).style.height = "50px"
        image_wrapper_element.item(i).style.lineHeight = "50px"
        image_wrapper_element.item(i).style.textAlign = "center"
        image_wrapper_element.item(i).style.backgroundColor = "skyblue"
        image_wrapper_element.item(i).style.borderRadius = "50%"
    }

}



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
                                <a class="like_button" data-post-id="${post["id"]}"> <i class="fas fa-thumbs-up"></i> Mi Piace</a>
                            </div>
                            <div class="col-6 text-center">
                                <div>Piace a <span id="like-counter-${post["id"]}" class="n_likes">${post["n_likes"]}</span> persone</div>
                            </div>
                        </div>
                    </div>
                </div>`
        document.querySelector(".row").insertAdjacentHTML("beforeend", post_element)

    }

}

function iniziali(stringa) {
    for (let i = 0; i < stringa.length; i++) {
        const element = stringa[i];
        if (element == " ")
            return i + 1;
    }
}

