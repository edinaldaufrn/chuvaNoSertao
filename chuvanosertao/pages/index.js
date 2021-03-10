import Link from "next/link" 
export default function Principal(){
  return(
    <div>
      <Link href="/movies">
        <a>
          Link movies
        </a>
      </Link>
    </div>
  )
}