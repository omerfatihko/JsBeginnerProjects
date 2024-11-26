const imageLoad = url =>
    new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", url);
        request.responseType = "blob";
        request.onload = () => {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject(Error(`Image didn't load successfully [Error code: ${request.statusText}]`))
            }
        };
        request.onerror = () => {
            reject(Error("There was a network error"));
        };
        request.send();
    });

const ImageGoesHere = document.getElementById("imageGoesHere");
const myImage = new Image();

imageLoad("large-image-bahtiyar-cat.jpg").then(
    response => {
        const imageURL = window.URL.createObjectURL(response);
        myImage.src = imageURL;
        ImageGoesHere.appendChild(myImage);
        alert("Image loaded");
    }).catch(
        error => alert(error)
    );