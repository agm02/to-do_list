import { useState } from "react";
import Button from "../components/button";
import Separator from "../components/separator";
import Pagination from "../components/pagination";
import { Colors, ITask } from "../utils/interfaces";
import Table from "../components/table";

export default function Body() {
  const [currPage, setCurrPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputTask, setInputTask] = useState<string>("");

  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastTimeoutId, setToastTimeoutId] = useState<NodeJS.Timeout>();

  const allItemsPerPage = [8, 16, 24];
  const [itemsPerPage, setItemsPerPage] = useState(allItemsPerPage[0]);

  function addTask() {
    const numTasks = tasks.length + 1;
    const lastArticleId = tasks.length === 0 ? 0 : tasks[tasks.length - 1].id;
    const newTask: ITask = {
      id: lastArticleId + 1,
      title: inputTask,
      creationDate: new Date(),
      checked: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setMaxPage(Math.ceil(numTasks / itemsPerPage));
    setInputTask("");

    clearTimeout(toastTimeoutId);
    setShowToast(true);
    setToastMsg("Tarefa adicionada");
    setToastTimeoutId(setTimeout(() => setShowToast(false), 2000));
  }

  function removeTask(taskId: number) {
    const numTasks = tasks.length - 1;
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setMaxPage(Math.ceil(numTasks / itemsPerPage));
    if (currPage === maxPage) {
      setCurrPage(Math.ceil(numTasks / itemsPerPage));
    }

    clearTimeout(toastTimeoutId);
    setShowToast(true);
    setToastMsg("Tarefa excluída");
    setToastTimeoutId(setTimeout(() => setShowToast(false), 2000));
  }

  function checkTask(taskId: number) {
    const checkedTask = tasks.filter((task) => task.id === taskId);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, conclusionDate: new Date(), checked: !task.checked }
          : task
      )
    );

    if (checkedTask.length !== 0 && !checkedTask[0].checked) {
      clearTimeout(toastTimeoutId);
      setShowToast(true);
      setToastMsg("Tarefa concluída");
      setToastTimeoutId(setTimeout(() => setShowToast(false), 2000));
    }
  }

  function handleNumVisiblePages(e: React.ChangeEvent<HTMLSelectElement>) {
    const numTasks = tasks.length === 0 ? 1 : tasks.length;
    const newItemsPerPage = +e.target.value;

    if (currPage === maxPage) {
      setCurrPage(Math.ceil(numTasks / newItemsPerPage));
    } else {
      const firstItemIndex = (currPage - 1) * itemsPerPage;
      const newCurrPage = Math.round(firstItemIndex / newItemsPerPage);
      setCurrPage(newCurrPage === 0 ? 1 : newCurrPage);
    }
    setItemsPerPage(newItemsPerPage);
    setMaxPage(Math.ceil(numTasks / newItemsPerPage));
  }

  function renderTasks() {
    const firstIndex = (currPage - 1) * itemsPerPage;
    const lastIndex = firstIndex + itemsPerPage;
    return tasks.slice(firstIndex, lastIndex);
  }

  function handlePrevPage() {
    setCurrPage((prevPage) => prevPage - 1);
  }

  function handleNextPage() {
    setCurrPage((prevPage) => prevPage + 1);
  }

  return (
    <main className="body">
      <h1 className="body-title bold">As minhas tarefas</h1>

      <div className="body-header-container">
        <div className="body-input-container">
          <div className="display-flex-column">
            <label htmlFor="tarefa">Descrição da tarefa:</label>
            <input
              className="form-control"
              type="text"
              id="tarefa"
              name="tarefa"
              value={inputTask}
              onChange={(e) => setInputTask(e.target.value)}
              style={{ padding: "10px 16px", width: "400px" }}
            ></input>
          </div>
          <Button
            title="Adicionar Tarefa"
            color={Colors.PRIMARY}
            padding="10px 16px"
            disabled={inputTask === ""}
            onClick={() => addTask()}
          />
        </div>

        <Pagination
          currPage={currPage}
          maxPage={maxPage}
          itemsPerPage={itemsPerPage}
          allItemsPerPage={allItemsPerPage}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          handleNumVisiblePages={(e) => handleNumVisiblePages(e)}
        />
      </div>

      <Separator />

      <Table
        tasks={renderTasks()}
        checkTask={(_, taskId) => checkTask(taskId)}
        handleRemove={(_, taskId) => removeTask(taskId)}
      />

      <div className="body-footer-container">
        <p className="blockquote">Total de tarefas: {tasks.length}</p>
        <Pagination
          currPage={currPage}
          maxPage={maxPage}
          itemsPerPage={itemsPerPage}
          allItemsPerPage={allItemsPerPage}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          handleNumVisiblePages={(e) => handleNumVisiblePages(e)}
        />
      </div>

      {showToast && (
        <div className="success-toast">
          <div className="success-toast-container">
            <p className="white-text">{toastMsg}</p>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={() => {
                setShowToast(false);
                clearTimeout(toastTimeoutId);
              }}
            ></button>
          </div>
        </div>
      )}
    </main>
  );
}
