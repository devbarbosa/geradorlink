import { Link } from 'react-router-dom';
import './error.css';

export default function Error(){
    return(
        <div className='container-eror'>
            <img src='notfound.png' alt='Pagina não encontrada' />
            <h1>Página não encontrada</h1>

            <Link to="/">
                Voltar para Home
            </Link>
        </div>
    )
}