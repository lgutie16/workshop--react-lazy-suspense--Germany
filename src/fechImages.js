export default function fetchImages(id) {
    return fetch(`https://picsum.photos/id/${id}/info`)
        .then(res => res.json())
        .catch((err) => console.log(err))
}