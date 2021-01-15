import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import "./ListUsers.css"
import { deleteUser } from "../../actions"


const ListUsers = () => {
    const Users = useSelector(state => state.users)
    const dispatch = useDispatch();

    const handleClick = (e, id) => {
        e.preventDefault();
        alert("Se elimino el usuario:  " + id)
        dispatch(deleteUser(id));
    }
    return (
        <div className="ListContainer container-fluid ">
            <div className="row">
                <h1>Lista de usuarios</h1>
                {Users.length === 0 ? <div>No hay usuarios.</div> : Users && Users.map((b, index) =>
                    <div className="interaction col-lg-3 col-md-6 col-12 p-3">
                        <div className="CardBody" key={index} >
                            <Link to={`/user/${b.id}`} style={{ textDecoration: "none" }} >
                                <div className="card-header" >
                                    <p className="CardText" >{b.name}</p>
                                </div>
                                <p className="CardText-e p-2" >{b.email}</p>
                            </Link>
                            <button className="btn btn-warning mb-2" onClick={(e) => handleClick(e, b.id)} >Eliminar Usuario</button>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}
export default ListUsers;