import { Colors, IButton } from "../utils/interfaces";
import "../theme/colors.scss";


function Button({ title, color, small, disabled, padding, square, onClick }: Readonly<IButton>) {
    let className = "";

    switch (color) {
        case Colors.RED:
            className += "red-light"
            break;
        case Colors.SUCCESS:
            className += "success"
            break;
        case Colors.GRAY:
            className += "white-button"
            break;
        case Colors.PRIMARY:
            className += "primary"
            break;
        default:
            className += "primary"
    }

    return (
        <button className={`${className} ${square ? 'btn-square' : ''} ${small ? 'btn-sm' : ''}`}
            disabled={disabled} style={{ padding: padding }} onClick={onClick}>{title}</button>
    );
}

export default Button;
