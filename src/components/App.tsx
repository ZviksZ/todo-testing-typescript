import * as React                                from 'react';
import {useReducer}                              from 'react';
import {Action, ActionType, ContextState, State} from "../types/stateType";
import NewTask                                   from "./NewTask";
import TasksList                                 from "./TasksList";
import {todoReducer}                             from "../reducers/todoReducer";

// Начальные значения стейта
export const initialState: State = {
   newTask: '',
   tasks: []
}

// <Partial> позволяет создать контекст без дефолтных значений
export const ContextApp = React.createContext<Partial<ContextState>>({});



const App: React.FC = () => {
// Используем созданный todoReducer, передав его аргументом в useReduser. Изначально в стейт попадёт initialState, и далее при диспатче (changeState) будет обновляться.
   const [state, changeState] = useReducer<React.Reducer<State, Action>>(todoReducer, initialState);

   const ContextState: ContextState = {
      state,
      changeState
   };

// Передаём в контекст результаты работы useReducer - стейт и метод его изменения
   return (
      <>
         <ContextApp.Provider value={ContextState}>
            <NewTask/>
            <TasksList/>
         </ContextApp.Provider>
      </>
   )
}

export default App;
