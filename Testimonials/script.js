const testimonials = [
    {
        author: {
            name: "Omer Fatih Konar",
            image: "image1.JPG"
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum voluptatum fugit sed doloribus. Dicta voluptas architecto iste cum ad ratione eius corporis. Incidunt ipsa cum labore! Porro soluta sint tempora officiis repellendus eligendi quod eos sapiente, nam excepturi culpa. Sequi provident velit odit voluptate quis aperiam harum non dolore?",
        date: "14th Sep"
    },
    {
        author: {
            name: "O. Fatih Konar",
            image: "image2.JPG"
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum voluptatum fugit sed doloribus. Dicta voluptas architecto iste cum ad ratione eius corporis. Incidunt ipsa cum labore! Porro soluta sint tempora officiis repellendus eligendi quod eos sapiente, nam excepturi culpa. Sequi provident velit odit voluptate quis aperiam harum non dolore?",
        date: "1st Aug"
    },
    {
        author: {
            name: "O.F.K. (30)",
            image: "image3.JPG"
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum voluptatum fugit sed doloribus. Dicta voluptas architecto iste cum ad ratione eius corporis. Incidunt ipsa cum labore! Porro soluta sint tempora officiis repellendus eligendi quod eos sapiente, nam excepturi culpa. Sequi provident velit odit voluptate quis aperiam harum non dolore?",
        date: "4th July"
    },
    {
        author: {
            name: "Omar F. Konarro",
            image: "image4.JPG"
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum voluptatum fugit sed doloribus. Dicta voluptas architecto iste cum ad ratione eius corporis. Incidunt ipsa cum labore! Porro soluta sint tempora officiis repellendus eligendi quod eos sapiente, nam excepturi culpa. Sequi provident velit odit voluptate quis aperiam harum non dolore?",
        date: "3rd Feb"
    }
];

const containerElement = document.getElementById("testimonials-container")

const makeTestimonialCard = testimonial => {
    return `<div class="testimonial-card">
        <img src="${testimonial.author.image}">
        <h2>${testimonial.author.name}</h2>
        <p>${testimonial.text}</p>
        <date>Written on ${testimonial.date}</date>
    </div> `
};

let currentTestimonial = 0;

const nextTestimonial = () => {
    if (currentTestimonial < testimonials.length - 1) {
        currentTestimonial += 1;
        updatePage();
    }
};

const previousTestimonial = () => {
    if (currentTestimonial > 0) {
        currentTestimonial -= 1;
        updatePage();
    }
};

const updatePage = () => {
    let markup = makeTestimonialCard(testimonials[currentTestimonial]);

    if (testimonials.length > 1) {
        markup += `<nav>
        <button onclick="previousTestimonial()">Previous</button>
        <button onclick="nextTestimonial()">Next</button>
        </nav>`
    }
    containerElement.innerHTML = markup;
};

updatePage();