export default function Movies(){
    const data = fetcher(`http://www.omdbapi.com/?apikey=1e4b92b9&s=bagdad`)
    return (
        <div>
            <h1>Chuva no Sertão</h1>
        </div>
    )
}

async function fetcher(url){
    const res= await fetch(url)
    const json = await res.json()
    return json
}