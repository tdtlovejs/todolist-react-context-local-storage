import {useContext, useState} from "react";
import {TodoContext} from "../contexts/ToDoContext";

const AppHeader = (props) => {
    const {
        todoList,
        addToDo
    } = useContext(TodoContext);
    const [toDo, setToDo] = useState('');
    const handleChange = (event) => {
        setToDo(event.target.value)
    }
    const addToDoNew = () => {
        if (toDo !== '') {
            addToDo(toDo);
            setToDo('');
        }
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addToDoNew();
        }
    }
    return (
        <div>
            <div className="header">
                <h2>To Do List - React Context</h2>
                <div className="input">
                    <input
                        onChange={handleChange}
                        type="text"
                        value={toDo}
                        placeholder="Title..."
                        onKeyDown={handleKeyDown}
                    />
                    <span className="addBtn" onClick={() => addToDoNew()}>Add</span>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;