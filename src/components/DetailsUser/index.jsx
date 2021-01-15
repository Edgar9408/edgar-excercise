import React from "react";
import { useSelector } from "react-redux";
import "./DetailsUser.css"

const DetailsUser = (userId) => {
    const User = useSelector(state => state.users);
    var currentUser = User.find(e => e.id == userId.userId);

    return (
        <div className="D-Container">
            <div className="card-header" >
                <h1>Detalles del usuario</h1>
            </div>
            <div className="D-Details" >
                <hr></hr>
                <p><span className="CardText" >ID: &nbsp; </span>{currentUser.id}</p>
                <hr></hr>
                <p className="text-capitalize" ><span className="CardText" >Nombre: &nbsp; </span> {currentUser.name}</p>
                <hr></hr>
                <p><span className="CardText" >Email: &nbsp; </span> {currentUser.email}</p>
                <hr></hr>
                <p><span className="CardText" >Teléfono: &nbsp; </span> {currentUser.tel}</p>
                <hr></hr>
                <p><span className="CardText" >Domicilio: &nbsp; </span> {currentUser.Adress}</p>
            </div>
        </div>
    )
}

export default DetailsUser;