import React from 'react'
import imagem from '../assets/img/cupido404.png'
import '../assets/css/404.css'

const Pagina404 = () => {
    return(
        <main className = "container flex flex--centro flex--coluna">
            <img className="cupido-imagem" src= {imagem} alt="ilustração cupidoo"/>
            <p className="naoencontrado-texto">
                Ops, essa página não existe!!!
            </p>
        </main>

    )
}

export default Pagina404