import { Link } from "react-router-dom"
import './Home.css';
import img1 from "../Components/Image/Carros/Honda Civic.jpg"
import img2 from "../Components/Image/Motocicletas/Honda CBR 650R.jpg"
import img3 from "../Components/Image/Motocicletas/Honda CBR 650R2.jpg"

export const Home = () =>{
    return(
        <>
        <div className='Carro'>
        <Link to='/Contatos' className="HondaCarHome">Honda Civic SI</Link>
        </div>
        <div className='Moto1'>
            <img src={img2} alt="" />
        </div>
        <div className='Moto2'>
            <img src={img3} alt="" />
        </div>
        </>
    );
}