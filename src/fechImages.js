function fetchImages() {
    return fetch("https://picsum.photos/v2/list")
        .then(res => res.json())
        .catch((err) => console.log(err))
}