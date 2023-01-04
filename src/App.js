// Le composant App affiche un tire ainsi que la liste des tâches via le composant TaskList

import React from "react";
import TaskList from "./TaskList";

const App = () => {
    const tasks = [
        {id: 1, label: 'Acheter du lait', isDone: true},
        {id: 2, label: 'Prendre des vacances', isDone: false},
    ]
    return (
        <div>
            <h1>Tâches</h1>
            <TaskList tasks={tasks} />
        </div>
    )
}

export default App;