import AppHeader from "./AppHeader";
import AppBody from "./AppBody";
import {useContext, useEffect, useState} from "react";
import {LABEL_TO_DO_LIST_STORAGE} from "../constants";
import {TodoContext} from "../contexts/ToDoContext";

const AppToDo = (props) => {
    const {
        setToDoList,
    } = useContext(TodoContext);
    const [initial, setInitial] = useState(false);
    useEffect(() => {
        const dataToDoList = localStorage.getItem(LABEL_TO_DO_LIST_STORAGE);
        const dataInitial = JSON.parse(dataToDoList);
        setToDoList(Array.isArray(dataInitial) ? dataInitial : []);
        setInitial(true);
    }, [])
    return (
        <>
            <AppHeader />
            {initial && <AppBody />}
        </>
    )
}

export default AppToDo;