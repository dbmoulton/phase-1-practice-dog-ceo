console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/4") 
        .then(
        (response)=>
        response.json()
        )
        .then ((data) => {
            data.message.forEach(image => {
            let dogImgEl = document.createElement("img")
            dogImgEl.src = image
            let dogImgDiv = document.getElementById("dog-image-container")
            dogImgDiv.appendChild(dogImgEl);
            })
        })
        .catch (err=>console.log(err))
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => {
        return res.json();
    })
    .then(data => {
        // console.log(data);
        Object.keys(data.message).forEach(breed =>{
            console.log(breed)
            let listEl = document.createElement("li")
            listEl.innerText = breed
            document.getElementById("dog-breeds").append(listEl)
        })
    })
})