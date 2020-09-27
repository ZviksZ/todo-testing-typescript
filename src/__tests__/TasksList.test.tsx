import * as React from 'react';
import {ContextApp, initialState} from "../components/App";

import {shallow} from "enzyme";
import {cleanup, render} from "@testing-library/react";

import TasksList from "../components/TasksList";
import {State} from "../types/stateType";

describe('<TasksList />',() => {

   afterEach(cleanup);

// Создаём тестовый стейт
   const testState: State = {
      newTask: '',
      tasks: [{name: 'test', isDone: false}, {name: 'test2', isDone: false}]
   }

// Передаём в ContextApp созданный тестовый стейт
   const Wrapper = () => {
      return (
         <ContextApp.Provider value={{state: testState}}>
            <TasksList/>
         </ContextApp.Provider>
      )
   }

   it('should render right tasks length', async () => {
      const {container} = render(<Wrapper/>);

// Проверяем длину отображаемого списка
      expect(container.querySelectorAll('li')).toHaveLength(testState.tasks.length);
   });

})
