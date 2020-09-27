import * as React from 'react';

import {useContext} from "react";
import {ContextApp} from "./App";

import {ActionType, TaskName} from "../types/stateType";

const NewTask: React.FC = () => {
// получаем state и dispatch-метод
   const {state, changeState} = useContext(ContextApp);

// отправляем два действия редьюсеру todoReducer - добавление задачи и изменение инпута. После их успешной обработки переменная state обновится. Для уточнения интерфейса передаваемого события можно воспользоваться расширенными React-интерфейсами
   const addTask = (event: React.FormEvent<HTMLFormElement>, task: TaskName) => {
      event.preventDefault();
      changeState({type: ActionType.Add, payload: task})
      changeState({type: ActionType.Change, payload: ''})
   }

// аналогично - отправим изменение значения в инпуте
   const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
      changeState({type: ActionType.Change, payload: event.target.value})
   }

   return (
      <>
         <form onSubmit={(event)=>addTask(event, state.newTask)}>
            <input type='text' onChange={(event)=>changeTask(event)} value={state.newTask}/>
            <button type="submit">Add a task</button>
         </form>
      </>
   )
};

export default NewTask;

