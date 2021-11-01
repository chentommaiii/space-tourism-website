import { Link } from "react-router-dom"
import "./Button.css"

const STYLES = ['btn--primary', 'btn--large']

const Button = ({text, buttonStyle, resourceClass, onClick, path}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    return (
        <Link to={path} className="btn">
            <button
            className={`${checkButtonStyle} ${resourceClass}`}
            onClick={onClick} >
                {text}
            </button>
        </Link>
    )
}

export default Button
