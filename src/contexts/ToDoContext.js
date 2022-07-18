import {createContext, useEffect, useState} from "react";
import {LABEL_TO_DO_LIST_STORAGE, TO_DO_DONE, TO_DO_PROCESSING} from "../constants";

export const TodoContext = createContext({
    toDoList: [],
    setToDoList: () => {},
    addToDo: () => {},
    removeToDoItem: () => {},
    onChangeToDoStatus: () => {}
});

const ToDoContextProvider = ({children}) => {
    const [toDoList, setToDoList] = useState([]);
    useEffect(() => {
        localStorage.setItem(LABEL_TO_DO_LIST_STORAGE, JSON.stringify(toDoList))
    }, [toDoList])
    const addToDo = (toDoLabel) => {
        if (toDoLabel !== '') {
            setToDoList(prev => {
                const now = new Date();
                return [{
                    id: now.valueOf(),
                    label: toDoLabel,
                    status: TO_DO_PROCESSING,
                    createdAt: now,
                }].concat(prev)
            })
        }
    }
    const removeToDoItem = (id) => {
        setToDoList(prev => {
            return prev.filter((toDoItem, index) => {
                return toDoItem.id !== id;
            })
        })
    }
    const onChangeToDoStatus = (id) => {
        setToDoList(prev => {
            return prev.map((toDoItem, index) => {
                if (toDoItem.id === id) {
                    return {
                        ...toDoItem,
                        status: toDoItem.status === TO_DO_DONE ? TO_DO_PROCESSING : TO_DO_DONE
                    }
                } else {
                    return toDoItem;
                }
            })
        })
    }
    const todoContextData = {
        toDoList,
        setToDoList,
        addToDo,
        removeToDoItem,
        onChangeToDoStatus,
    };

    return <TodoContext.Provider value={todoContextData}>
        {children}
    </TodoContext.Provider>
}

export default ToDoContextProvider;