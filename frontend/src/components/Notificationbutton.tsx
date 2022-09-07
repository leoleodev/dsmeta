import icon from '../images/notificationIcon.svg'
import Style from '../styles/modules/Notificationbutton.module.css'

export function Notificationbutton(){
    return(
        <div className={Style.buttonContainer}>
            <img src={icon} alt="Notication-image" />
        </div>
    );
}