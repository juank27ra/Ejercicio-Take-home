import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { postInfo } from '../redux/actions';
import style from './InfoCreate.module.css'

export default function InfoCreate() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [input, setInput] = useState({
        Id: '',
        Sku: '',
        Cantidad: ''
    })

    const handleChange=(e) =>{
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postInfo(input))
        setInput({
            Id: '',
            Sku: '',
            Cantidad: ''
        })
    }

    return (
    <div>
    <h1>Crear Producto</h1>
        <div className={style.botonback}>
            <button  onClick={() => navigate(-1)}>Back</button>
        </div>
    <br/>
    <br/>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Id </label>
                        <input
                        type= 'number'
                        value= {input.Id}
                        name= 'Id'
                        onChange={(e) => handleChange(e)}
                        required
                        />
                </div>
                    <br/>
                    <br/>
                <div>
                    <label>Sku </label>
                        <input
                        type= 'text'
                        value= {input.Sku}
                        name= 'Sku'
                        onChange={(e) => handleChange(e)}
                        required
                        />
                </div>
                    <br/>
                    <br/>
                <div>
                    <label>Cantidad </label>
                        <input
                        type= 'number'
                        value= {input.Cantidad}
                        name= 'Cantidad'
                        onChange={(e) => handleChange(e)}
                        required
                        />
                </div>
                <br/>
                <button  type="submit" ><h5>Crear</h5></button>
            </form>
        </div>
    )
}
