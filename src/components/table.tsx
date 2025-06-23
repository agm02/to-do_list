import { formatISODate } from "../utils/dateUtils";
import { Colors, ITable } from "../utils/interfaces";
import Button from "./button";
import CheckBox from "./checkbox";

function Table({ tasks, checkTask, handleRemove }: Readonly<ITable>) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col" style={{ width: '40%' }}>Tarefa</th>
                    <th scope="col" style={{ width: '20%' }}>Data de criação</th>
                    <th scope="col" style={{ width: '20%' }}>Data de conclusão</th>
                    <th scope="col" style={{ width: '20%' }}></th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => {
                    return (
                        <tr key={task.id}>
                            <td><CheckBox title={task.title} isChecked={task.checked} onChange={(e) => checkTask(e, task.id)}/></td>
                            <td>{formatISODate(task.creationDate)}</td>
                            <td>{task.conclusionDate ? formatISODate(task.conclusionDate) : '-'}</td>
                            <td style={{textAlign: "center"}}><Button title="Excluir" color={Colors.RED} padding="10px 16px" onClick={(e) => handleRemove(e, task.id)}/></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default Table;