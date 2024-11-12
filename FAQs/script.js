const dataArray = [
    {
        title: "Why is JS cool?",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est totam vel debitis corrupti accusantium nostrum ipsum odit porro officia exercitationem repellendus blanditiis sequi aperiam repellat, ullam dolorem sint. Non obcaecati nobis sunt repudiandae vitae eos laborum, cupiditate quibusdam? Laudantium, laboriosam. Expedita, cum. Veniam dolores, rerum maxime repellendus saepe tempora, iusto, ex distinctio asperiores fugiat natus. Aliquid alias, iusto tempora quam tenetur sapiente deleniti ullam dolorem quae reprehenderit facilis nostrum eaque repellat earum voluptate expedita possimus ratione amet culpa unde aliquam! Cupiditate animi cum beatae debitis aspernatur temporibus architecto labore ipsum nisi quisquam aperiam in consequuntur, enim consectetur praesentium eveniet."
    },
    {
        title: "What is JS?",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est totam vel debitis corrupti accusantium nostrum ipsum odit porro officia exercitationem repellendus blanditiis sequi aperiam repellat, ullam dolorem sint. Non obcaecati nobis sunt repudiandae vitae eos laborum, cupiditate quibusdam? Laudantium, laboriosam. Expedita, cum. Veniam dolores, rerum maxime repellendus saepe tempora, iusto, ex distinctio asperiores fugiat natus. Aliquid alias, iusto tempora quam tenetur sapiente deleniti ullam dolorem quae reprehenderit facilis nostrum eaque repellat earum voluptate expedita possimus ratione amet culpa unde aliquam! Cupiditate animi cum beatae debitis aspernatur temporibus architecto labore ipsum nisi quisquam aperiam in consequuntur, enim consectetur praesentium eveniet."
    },
    {
        title: "How can I learn JS?",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est totam vel debitis corrupti accusantium nostrum ipsum odit porro officia exercitationem repellendus blanditiis sequi aperiam repellat, ullam dolorem sint. Non obcaecati nobis sunt repudiandae vitae eos laborum, cupiditate quibusdam? Laudantium, laboriosam. Expedita, cum. Veniam dolores, rerum maxime repellendus saepe tempora, iusto, ex distinctio asperiores fugiat natus. Aliquid alias, iusto tempora quam tenetur sapiente deleniti ullam dolorem quae reprehenderit facilis nostrum eaque repellat earum voluptate expedita possimus ratione amet culpa unde aliquam! Cupiditate animi cum beatae debitis aspernatur temporibus architecto labore ipsum nisi quisquam aperiam in consequuntur, enim consectetur praesentium eveniet."
    },
    {
        title: "Where can I learn JS?",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est totam vel debitis corrupti accusantium nostrum ipsum odit porro officia exercitationem repellendus blanditiis sequi aperiam repellat, ullam dolorem sint. Non obcaecati nobis sunt repudiandae vitae eos laborum, cupiditate quibusdam? Laudantium, laboriosam. Expedita, cum. Veniam dolores, rerum maxime repellendus saepe tempora, iusto, ex distinctio asperiores fugiat natus. Aliquid alias, iusto tempora quam tenetur sapiente deleniti ullam dolorem quae reprehenderit facilis nostrum eaque repellat earum voluptate expedita possimus ratione amet culpa unde aliquam! Cupiditate animi cum beatae debitis aspernatur temporibus architecto labore ipsum nisi quisquam aperiam in consequuntur, enim consectetur praesentium eveniet."
    }
];

const makeHTML = data => {
    return `<details>
    <summary>${data.title}</summary>
    <p>${data.detail}</p>
    </details>`
};

const containerElement = document.getElementById("faq-container");

containerElement.innerHTML = dataArray.map(dataItem => makeHTML(dataItem)).join("");