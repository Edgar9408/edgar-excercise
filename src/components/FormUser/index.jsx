import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createUser } from "../../actions"
import "./FormUser.css"


const FormUser = () => {
    const dispatch = useDispatch();
    const Users = useSelector(state => state.users)
    const [errors, setErrors] = useState({
        name: "Escriba nombre y apellido",
        email: "Ingrese un email válido",
        tel: 'El numero de telefono no debe contener espacios ni simbolos(-,+)',
        Adress: 'Escriba su direccion de domicilio'
    });
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: "",
        Adress: "",
        id: Users.length + 1,
    })
    const handleInputChange = function (e) {
        setErrors(validate({
            ...inputs,
            [e.target.name]: e.target.value,
        }, Users))
        setInputs({
            ...inputs,
            id: Users.length + 1,
            [e.target.name]: e.target.value,
        });
    }
    var danger = {
        marginTop: '7px',
        display: 'block',
        color: 'grey',
        fontSize: '10px'
    }
    function isNotEmpty(obj) {
        return Object.keys(obj).length !== 0;
    }
    const handleSubmit = (e, inputs, Users) => {
        e.preventDefault();
        dispatch(createUser(inputs))
        setInputs({
            name: "",
            email: "",
            tel: "",
            Adress: "",
        })
    }
    console.log(errors)
    return (
        <div className="formulario" onSubmit={(e) => handleSubmit(e, inputs, Users)} >
            <h2>Registrar Usuario</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" name="name" value={inputs.name} className="form-control" id="exampleInputPassword1" onChange={handleInputChange} />
                </div>
                {errors.name && (<p style={danger}>{errors.name}</p>)}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" name="email" value={inputs.email} className="form-control" id="exampleInputPassword1" onChange={handleInputChange} />
                </div>
                {errors.email && (<p style={danger}>{errors.email}</p>)}
                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input type="text" name="tel" value={inputs.tel} className="form-control" id="exampleInputPassword1" onChange={handleInputChange} />
                </div>
                {errors.tel && (<p style={danger}>{errors.tel}</p>)}
                <div className="mb-3">
                    <label className="form-label">Domicilio</label>
                    <input type="text" name="Adress" value={inputs.Adress} className="form-control" id="exampleInputPassword1" onChange={handleInputChange} />
                </div>
                {errors.Adress && (<p style={danger}>{errors.Adress}</p>)}
                <div className="d-flex justify-content-center" >
                    <input className="btn btn-primary crear" disabled={isNotEmpty(errors)} type="submit" value="Crear Usuario" />
                </div>
            </form>
        </div>
    )
}
function exist(u, i) {
    let array = u.find(e => e.email == i)
    if (array) { return true } else { return false }
}

function validate(inputs, U) {
    let errors = {};
    if (!/([a-zA-Z]+)\s([a-zA-Z]+)/.test(inputs.name)) {
        errors.name = 'Escriba nombre y apellido';
    }
    if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(inputs.email)) {
        errors.email = "Ingrese un email válido";
    } else if (exist(U, inputs.email)) {
        errors.email = "Ya hay un usario registrado con ese Email"
    }
    if (!/^\d{7,15}$/g.test(inputs.tel)) {
        errors.tel = 'El numero de telefono no debe contener espacios ni simbolos(-,+)';
    }
    if (!inputs.Adress) {
        errors.Adress = 'Escriba su direccion de domicilio';
    }
    return errors;
};

export default FormUser;