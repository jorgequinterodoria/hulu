import React from 'react'
import '../css/Nav.css'
import request from '../request'


function Nav({setSelectedOption}) {
    return (
        <div className="nav">
            <h3 onClick={()=>setSelectedOption(request.fetchTrending)}>Tendencias</h3>
            <h3 onClick={()=>setSelectedOption(request.fetchTopRated)}>Mejor Rating</h3>
            <h3 onClick={()=>setSelectedOption(request.fetchActionMovies)}>Acción</h3>
            <h3 onClick={()=>setSelectedOption(request.fetchComedyMovies)}>Comedias</h3>
            <h3 onClick={()=>setSelectedOption(request.fetchHorrorMovies)}>Terror</h3>
            <h3 onClick={()=>setSelectedOption(request.fetchRomanceMovies)}>Romance</h3>
            <h3 onClick={()=>setSelectedOption(request.fetchMystery)}>Misterio</h3>
            <h3 onClick={()=>setSelectedOption(request.fetchSciFi)}>Ciencia Ficción</h3>
            <h3 onClick={()=>setSelectedOption(request.fetchWestern)}>Oeste</h3>
            <h3 onClick={()=>setSelectedOption(request.fetchAnimation)}>Animación</h3>
            <h3 onClick={()=>setSelectedOption(request.fetchTV)}>Películas</h3>
        </div>
    )
}

export default Nav
