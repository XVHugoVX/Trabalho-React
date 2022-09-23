import './Modelosmotos.css'
import CBR650R from "../Components/Image/Motocicletas/CBR 650R.png"
import CB300R from "../Components/Image/Motocicletas/CB300R.png"

import { Link } from "react-router-dom"
export const Modelosmotos = () => {
    return (
        <>
            <div className='moto1'>
                <img src={CB300R} alt="" />
            </div>
            <div>
                <table className='table300'>
                    <thead>
                        <tr>
                            <th>Modelo</th>
                            <th>Cilindrada</th>
                            <th>Km por Litros</th>
                            <th>Combustível</th>
                            <th>Potência Máxima</th>
                            <th>Peso</th>
                            <th>Transmissão</th>
                            <th>Injeção</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CB300R</td>
                            <td>286</td>
                            <td>30,2/L</td>
                            <td>Gasolina</td>
                            <td>9.000 rpm</td>
                            <td>144 KG</td>
                            <td>6 Velocidades</td>
                            <td>Eletrônico</td>
                        </tr>
                    </tbody>
                </table>
                <Link to='/Contatos' className="Buy300">Comprar</Link>
            </div>

            <div className='moto2'>
                <img src={CBR650R} alt="" />
            </div>
            <div>
                <table className='table650'>
                    <thead>
                        <tr>
                            <th>Modelo</th>
                            <th>Cilindrada</th>
                            <th>Km por Litros</th>
                            <th>Combustível</th>
                            <th>Potência Máxima</th>
                            <th>Peso</th>
                            <th>Transmissão</th>
                            <th>Injeção</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CBR 650R</td>
                            <td>286</td>
                            <td>30,2/L</td>
                            <td>Gasolina</td>
                            <td>9.000 rpm</td>
                            <td>144 KG</td>
                            <td>6 Velocidades</td>
                            <td>Eletrônico</td>
                        </tr>
                    </tbody>
                </table>
                <Link to='/Contatos' className="Buy650">Comprar</Link>
            </div>
        </>
    );
}