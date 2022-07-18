import './App.css';
import ToDoContextProvider from "./contexts/ToDoContext";
import AppToDo from "./components/AppToDo";

const App = () => {
    return (
        <div className="app">
            <ToDoContextProvider>
               <AppToDo />
            </ToDoContextProvider>
        </div>
    );
}

export default App;
