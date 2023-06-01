import React from 'react'
import { useState } from 'react'
import Card from './Card'
import Error from './Error'

const Form = () => {
    const[usuario, setUsuario] = useState({
        nombre: '',
        libroFav: ''
    })
    const[usuarioTemp, setUsuarioTemp] = useState({
        nombre: '',
        libroFav: ''
    })

    const[show, setShow] = useState(false)
    const[showError, setShowError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        // const nombreTarget = event.target.querySelector('.nombre').value;
        // const libroFav = event.target.querySelector('.libro-fav').value;

        if (usuarioTemp.nombre.trim().length < 3 ||
            /^\s/.test(usuarioTemp.nombre) ||
            usuarioTemp.libroFav.trim().length < 6){
                setShowError(true)
                setShow(false)
        } else{
            setShowError(false)
            setShow(true)
            setUsuario({nombre: usuarioTemp.nombre, libroFav: usuarioTemp.libroFav})
        }
        
    }

    return (
        <div className='div-form'>
            <form className='form' onSubmit={handleSubmit}>
            <input type='text' placeholder='Nombre' onChange={(e) => {setUsuarioTemp({...usuarioTemp, nombre:e.target.value})}}/>
            <input type='text' placeholder='Libro favorito' className='libro-fav' onChange={(e) => {setUsuarioTemp({...usuarioTemp, libroFav:e.target.value})}}/>
            <button type='submit'>Enviar</button>
            </form>
            {show && <Card usuario={usuario}/>}
            {showError && <Error/>}
        </div>
    
    )
}


export default Form;