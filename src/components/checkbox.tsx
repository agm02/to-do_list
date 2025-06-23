import { Colors, ICheckBox } from "../utils/interfaces"
import Button from "./button"

export default function CheckBox({ title, isChecked, onChange }: Readonly<ICheckBox>) {
    return (
        <div className="checkbox">
            <label htmlFor="checkbox">Checkbox</label>
            <input className="form-check-input" id="checkbox" type="checkbox" checked={isChecked} onChange={onChange} />
            <p className={`${isChecked ? "checked" : ''}`}>{title}</p>
            {isChecked ? <Button title="Concluída" color={Colors.SUCCESS} small/> : null}
        </div>
    )
}