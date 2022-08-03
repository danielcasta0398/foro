import axios from 'axios';
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import './messages.css';

import globo from '../../img/globo.jfif'

const Messages = () => 
{
    // const { id } =  useParams()
    // const [ temas , setTemas ] = useState("Prueba")
    // useEffect(() => {
    //     axios.get(`http://localhost/php/App_foro/foro/server/mensajes.php?id=${id}`)
    //     .then(res =>console.log(res))
    //     .catch(error =>console.log(error))
    // }, [])

    const data = e => {
        e.preventDefault()
        let titulo = e.target.title.value
        let tema = e.target.tema_select.value
        let description = e.target.password.value
    }
    return (
        <div>
            <section className='header2'>
                <img src={globo} alt="globo de conversación" />
                <h1>Inicia tu hilo</h1>
            </section>
            <section className='formulario'>
                <form onSubmit={data}>
                    <label>Título:</label>
                    <input id='title' name="title"></input><br/>
                    <label>Tema:</label>
                    <select name="tema_select" id="temas">
                        <option value="Empleo/Emprendimiento">Empleo/Emprendimiento</option>
                        <option value="Finanzas" selected>Finanzas</option>
                        <option value="Salud y entrenamiento">Salud y entrenamiento</option>
                        <option value="Relaciones">Relaciones</option>
                        <option value="Viajes">Viajes</option>
                        <option value="Ocio y videojuegos">Ocio y videojuegos</option>
                    </select>
                    <CKEditor
                    editor={ Editor }
                    data="<p>Escribe</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Escribe', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => 
                    {
                        const data = editor.getData().length;
                        console.log( 'Blur.', {editor, data });
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor);
                    } }
                    />
                    <div id="btn_dir">
                        <button className='button-white'>ENVIAR</button>
                    </div>
                    
                </form>
                <p>Una vez que envíes el mensaje, no podrás editarlo o eliminarlo.</p>
            </section>

        </div>
    );
};

export default Messages;