import {MDCRipple} from '@material/ripple';
import {Link} from "react-router-dom";

const Button = (props) => {
    return (
        <>
            <Link to={`/${props.name}`}>
            <button className="mdc-icon-button">
                <span className="mdc-icon-button__ripple"></span>
                    <i className="material-icons mdc-list-item__graphic">{props.name}</i>
            </button>
            </Link>
        </>
    )
}

export default Button;
