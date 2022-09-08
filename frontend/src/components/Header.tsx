
import Style from '../styles/modules/Header.module.css';
import imageHeader from '../images/image-header.svg';

export function Header(){
    return(
        
        <header>
            <div className={Style.headerContainer}>
                <img src={imageHeader} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por <strong>Leonardo Developer FrontEnd</strong>
                </p>
                <p>
                    <i>Creditos para @devsuperior.ig</i>
                </p>
            </div>
        </header>
        
    );
}