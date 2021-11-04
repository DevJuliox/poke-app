import React from 'react'
import PokeCss from '../../styles/Poke.module.css'
import Link from 'next/link'

export default function Pokemon({ data }) {

    return (
        <>
            <div className={PokeCss.contenedor}>
                <div className={`${PokeCss.Info} ${data.types[0].type.name}`}>
                    <div className={PokeCss.navegacion}>
                        <Link scroll={false} href={{
                            pathname: '/',
                            as: '/'
                        }}>
                            <a>
                                <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 2L2 12.5L16 23.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </Link>

                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9057 1.18156C18.9526 1.18532 19.1045 1.20226 19.2433 1.2192C22.0291 1.54287 24.3158 3.65613 24.873 6.4205C25.1225 7.66249 24.9987 9.25638 24.5522 10.6038C24.0795 12.0208 23.2859 13.259 21.9315 14.691C21.29 15.3685 20.7422 15.8766 18.9526 17.4573C18.5192 17.8393 18.0371 18.2665 17.8833 18.4076C15.9623 20.1389 14.6286 21.5916 13.4824 23.2006L13.2385 23.5449H12.9909L12.7433 23.543L12.4994 23.1817C11.4545 21.6349 10.2258 20.2461 8.40049 18.5506C8.04219 18.2157 7.63512 17.8487 6.47392 16.8137C4.68054 15.2104 3.76321 14.2864 3.02034 13.3324C1.81412 11.7799 1.20445 10.3158 1.02436 8.52812C0.988718 8.15929 0.992471 7.27672 1.03374 6.95682C1.23071 5.44197 1.86102 4.13976 2.90591 3.09159C3.9508 2.04343 5.25082 1.40926 6.75906 1.21355C7.12111 1.16839 7.909 1.16839 8.27856 1.21355C9.65361 1.38856 10.8655 1.94181 11.8803 2.85825C12.2386 3.18192 12.642 3.64296 12.884 4.00615C12.9402 4.09083 12.9909 4.16046 12.9965 4.16046C13.0021 4.16046 13.0528 4.09083 13.1091 4.00615C13.3511 3.64296 13.7544 3.18192 14.1127 2.85825C15.1088 1.95875 16.3075 1.40361 17.6357 1.22672C17.9096 1.18909 18.6899 1.16274 18.9057 1.18156Z" stroke="white" strokeWidth="2" />
                        </svg>


                    </div>
                    <div className={PokeCss.nombre}>
                        <h1>{data.name}</h1>
                        <span>#00{data.id}</span>
                    </div>
                    <div className={PokeCss.tipos}>
                        {data.types.map((type, index) => (
                            <div key={index} className={PokeCss.tipo}>
                                <span>{type.type.name}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <img
                            src={data.sprites.other.dream_world.front_default}
                            alt={data.name}
                            className={PokeCss.imagen}
                            width="200"
                            height="200"
                        />


                    </div>
                </div>
                <div className={PokeCss.masInfo}>

                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {

    const { name } = context.params

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    const data = await response.json()

    return {
        props: {
            data
        },
    }
}
