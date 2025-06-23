import { useId } from "react";
import { Colors, ISelect } from "../utils/interfaces";
import "../theme/colors.scss";

function Select({ label, name, value, defaultValue, options, color, onChange }: Readonly<ISelect>) {
    const selectId = useId();

    let className = "";

    switch (color) {
        case Colors.RED:
            className += "red-light"
            break;
        case Colors.GRAY:
            className += "white-select"
            break;
        case Colors.PRIMARY:
            className += "primary"
            break;
        default:
            className += "primary"
    }

    return (
        <>
            {label ?
                <label htmlFor={selectId}>{label}</label>
                : null
            }
            <select className={className} id={selectId} name={name} onChange={onChange} onClick={(e) => e.stopPropagation()} value={value}>
                {defaultValue ? <option key="-1" value="">{defaultValue}</option> : null}
                {defaultValue && options.length > 0 ? <option disabled></option> : null}
                {options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
        </>
    );
}

export default Select;
