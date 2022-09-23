import { Link } from "react-router-dom"
import img from "../Image/hondalogo.png"
import './style.css';

export const Menu = () =>{
    return(
            <header>
            <div className="logo">
                <img src={img} alt=""/>
            </div>     
                <nav className="menu">
                    <ul>
                        <li>
                            <Link to='/modelosmotos'>Motos</Link>
                            <Link to='/modeloscarros' className="carro">Carros</Link>
                            <Link to='/'>Home</Link>
                            <Link to='/servicos'>Serviços</Link>
                            <Link to='/contatos'>Contatos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}