import './Modeloscarros.css'
import HondaAccord from "../Components/Image/Carros/Honda Accord.png"
import HondaHRV from "../Components/Image/Carros/Honda HRV.png"
import { Link } from "react-router-dom"
export const Modeloscarros = () =>{
    return(
        <>
        <div className='carro1'>
                <img src={HondaAccord} alt="" />
            </div>
            <div>
                <table className='tableACCORD'>
                    <thead>
                        <tr>
                            <th>Modelo</th>
                            <th>Potência</th>
                            <th>Km por Litros</th>
                            <th>Combustível</th>
                            <th>Torque</th>
                            <th>Peso</th>
                            <th>Transmissão</th>
                            <th>Injeção</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Honda Accord</td>
                            <td>212</td>
                            <td>17,6/L</td>
                            <td>Gasolina</td>
                            <td>17,8</td>
                            <td>1.555 KG</td>
                            <td>CVT</td>
                            <td>Eletrônico</td>
                        </tr>
                    </tbody>
                </table>
                <Link to='/Contatos' className="BuyACCORD">Comprar</Link>
            </div>

            <div className='carro2'>
                <img src={HondaHRV} alt="" />
            </div>
            <div>
                <table className='tableHRV'>
                    <thead>
                        <tr>
                            <th>Modelo</th>
                            <th>Potência</th>
                            <th>Km por Litros</th>
                            <th>Combustível</th>
                            <th>Torque</th>
                            <th>Peso</th>
                            <th>Transmissão</th>
                            <th>Injeção</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Honda HRV</td>
                            <td>177</td>
                            <td>12,6/L</td>
                            <td>Etano/Gasolina</td>
                            <td>24,5</td>
                            <td>1.422 KG</td>
                            <td>CVT</td>
                            <td>Eletrônico</td>
                        </tr>
                    </tbody>
                </table>
                <Link to='/Contatos' className="BuyHRV">Comprar</Link>
            </div>
 
        </>
    );
}