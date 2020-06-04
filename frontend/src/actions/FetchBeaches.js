export default function FetchBeaches() {
    fetch('http://localhost:3000/beaches')
    .then(resp => resp.json())
    .then(data => console.log(data))
}
