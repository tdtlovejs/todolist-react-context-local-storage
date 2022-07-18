import {TO_DO_DONE, TO_DO_PROCESSING} from "../constants";
import {useContext} from "react";
import {TodoContext} from "../contexts/ToDoContext";

const AppBody = (props) => {
    const {
        toDoList,
        removeToDoItem,
        onChangeToDoStatus
    } = useContext(TodoContext);

    return (
        <div className="body">
            <ul>
                {
                    toDoList.map((toDoItem, index) => {
                        return (
                            <li key={index} onClick={() => onChangeToDoStatus(toDoItem.id)} className={toDoItem.status === TO_DO_DONE ? "checked" : ""}>
                                <span className="checkedIcon"></span>
                                <span className="label" >
                          {toDoItem.label}
                      </span>
                                <span onClick={() => removeToDoItem(toDoItem.id)} className="close">
                        ×
                      </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default AppBody;