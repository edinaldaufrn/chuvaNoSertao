import useSWR from "swr"
export default function Movies(){
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=1e4b92b9&s=Titanic`, getServerSideProps)
    if(error ) return <div>Falha no carregamento.</div>
    if (!data) return <div>carregando...</div>
        return (
            <div>
            { data.Search.map( (m) => <div>{m.Title} --- <br /><img src={m.Poster} alt="FALTA A IMAGEM"></img> --- {m.Year}</div>  ) }
       </div>
    )
}

async function getServerSideProps(url){
    const res= await fetch(url)
    const json = await res.json()
    return json
}
