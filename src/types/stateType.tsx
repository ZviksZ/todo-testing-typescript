import {Dispatch} from "react";

export type TaskName = string;

// Созданная задача имеет название и статус готовности
export type Task = {
   name: string;
   isDone: boolean
}

export type Tasks = Task[];

// В состоянии хранится записываемая в инпут новая задача, а также массив уже созданных задач
export type State = {
   newTask: string;
   tasks: Tasks
}

// Все возможные варианты действий со стейтом
export enum ActionType {
   Add = 'Add',
   Change = 'Change',
   Remove = 'Remove',
   Toggle = 'Toggle'
}

type ActionStringPayload = {
   type: ActionType.Add | ActionType.Change,
   payload: string
}

type ActionObjectPayload = {
   type: ActionType.Toggle | ActionType.Remove,
   payload: Task
}

// Объединяем предыдущие две группы для использования в редьюсере
export type Action = ActionStringPayload | ActionObjectPayload;

// Наш контекст состоит из стейта и функции-редьюсера, в которую будут передаваться Action. Тип Dispatch импортируется из библиотеки react
export type ContextState = {
   state: State;
   changeState: Dispatch<Action>
}
