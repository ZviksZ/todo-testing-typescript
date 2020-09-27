import {todoReducer} from "../reducers/todoReducer";
import {ActionType, Action, State} from "../types/stateType";
import {Task} from "../types/stateType";

describe('todoReducer',()=>{
   it('returns new state for "ADD" type', () => {
// Создаём стейт с пустым массивом задач
      const initialState: State = {newTask: '', tasks: []};
// Создаём действие 'ADD' и передаём в него текст 'new task'
      const updateAction: Action = {type: ActionType.Add, payload: 'new task'};
// Вызываем редьюсер с переданными стейтом и экшеном
      const updatedState = todoReducer(initialState, updateAction);
// Ожидаем получить в стейте добавленную задачу
      expect(updatedState).toEqual({newTask: '', tasks: [{name: 'new task', isDone: false}]});
   });

   it('returns new state for "REMOVE" type', () => {
      const task: Task = {name: 'new task', isDone: false}
      const initialState: State = {newTask: '', tasks: [task]};
      const updateAction: Action = {type: ActionType.Remove, payload: task};
      const updatedState = todoReducer(initialState, updateAction);
      expect(updatedState).toEqual({newTask: '', tasks: []});
   });

   it('returns new state for "TOGGLE" type', () => {
      const task: Task = {name: 'new task', isDone: false}
      const initialState: State = {newTask: '', tasks: [task]};
      const updateAction: Action = {type: ActionType.Toggle, payload: task};
      const updatedState = todoReducer(initialState, updateAction);
      expect(updatedState).toEqual({newTask: '', tasks: [{name: 'new task', isDone: true}]});
   });

   it('returns new state for "CHANGE" type', () => {
      const initialState: State = {newTask: '', tasks: []};
      const updateAction: Action = {type: ActionType.Change, payload: 'new task'};
      const updatedState = todoReducer(initialState, updateAction);
      expect(updatedState).toEqual({newTask: 'new task', tasks: []});
   });
})
