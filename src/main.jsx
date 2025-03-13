import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Count from '/src/Count.jsx';
import StateObject from '/src/StateObject';
import AnimalList from '/src/AnimalList';
import AnimalSearch from '/src/AnimalSearch';
import ImportCss from '/src/ImportCss';
import StyledComponents from '/src/StyledComponents';
import UseRef from '/src/UseRef';
import UseReducer from '/src/UseReducer';
import TestReducer from '/src/TestReducer';
import UseContext from '/src/UseContext';
import ContextState from '/src/ContextState';
import StateColor from '/src/StateColor';
import TypeScriptTodo from '/src/TypeScriptTodo';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Count title='useStateの使い方' />
    <StateObject title='useStateオブジェクトでの使い方' />
    <AnimalList title='配列の表示' />
    <AnimalSearch title='検索機能の実施' />
    <ImportCss title='Classの操作' />
    <StyledComponents title='styled-componentsでのスタイルの管理' />
    <UseRef title='useRefを使用した属性の変更' />
    <UseReducer title='useReducer()の使い方' />
    <TestReducer title='useReducer()のテスト' />
    <UseContext title='useContext()の使い方' />
    <ContextState title='contextとstateの合わせ技' />
    <StateColor title='stateで色を変更' />
    <TypeScriptTodo title='TypeScriptでTodoリストを制作' />
  </StrictMode>
);
