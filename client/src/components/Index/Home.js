import axios from 'axios';
import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import '../../styles/home.css'


import maletin from '../../img/maletin.jfif'
import dolar from '../../img/dolar.jfif'
import ocio from '../../img/ocio.jfif'
import relaciones from '../../img/person.jfif'
import pesas from '../../img/pesas.jfif'
import viajes from '../../img/viajes.jfif'



const Home = () => {

    const [ temas , setTemas ] = useState("Prueba")

    useEffect(() => {
        axios.get("http://localhost/php/App_foro/foro/server/temas.php")
        .then(res =>setTemas(res.data))
        .catch(error =>console.log(error))
    }, [])

   
    return (
        <div>
            <section className='header'>
                <h1>Encuentra un tema del que hablar</h1>
            </section>
            <section>
                <div className='topic' id={ temas[0].id }>
                    <img src={maletin} alt="maletin"/>
                    <Link to = {`/hilos/${temas[0].id}`}><h2>{ temas[0].temas }</h2></Link>
                </div>
                <div className='topic' id={ temas[1].id }>
                    <img src={dolar} alt="dolar"/>
                    <Link to = {`/hilos/${temas[1].id}`}><h2>{ temas[1].temas }</h2></Link>
                </div>
                <div className='topic' id={ temas[2].id }>
                    <img src={pesas} alt="pesas"/>
                    <Link to = {`/hilos/${temas[2].id}`}><h2>{ temas[2].temas }</h2></Link>
                </div>
                <div className='topic'id={ temas[3].id }>
                    <img src={relaciones} alt="relaciones"/>
                    <Link to = {`/hilos/${temas[3].id}`}><h2>{ temas[3].temas }</h2></Link>
                </div>
                <div className='topic' id={ temas[4].id }>
                    <img src={viajes} alt="viajes"/>
                    <Link to = {`/hilos/${temas[4].id}`}><h2>{ temas[4].temas }</h2></Link>
                </div>
                <div className='topic' id={ temas[5].id }>
                    <img src={ocio} alt="ocio"/>
                    <Link to = {`/hilos/${temas[5].id}`}><h2>{ temas[5].temas }</h2></Link>
                </div>
            </section>
            <footer>
                <p>¿No encuentras tu tema? <a href="">Escríbenos</a></p>
            </footer>
        </div>
    );
};

export default Home;