import { useState,useReducer,useRef,useMemo,useCallback,useEffect,createContext } from 'react';
import {Contents, reducer} from './component/db'
import Header from './component/header/header';
import Find from './component/main/find';
import List from './component/main/list';
import Footer from './component/footer/footer';
import './App.css'

export const dicContext = createContext();
export const editContext = createContext();



function App() {
  const [state,dispatch] = useReducer(reducer, Contents);
  const {dics} = state;
  const {word,content, category} = state.inputs;
  const userId = useRef(7);
  
  const CreateWord = useCallback((word,content, category)=>{
    const createDate = new Date().toLocaleDateString();
  dispatch({
    type : 'create',
    dic : {
      word,content, category, 
      id:userId.current,
      createDate
    }
  })
  userId.current += 1
  },[word,content, category])

  const editWord = (id,content)=>{
    dispatch({
      type : 'edit',
      id,content
    })
  }
  const removeWord = (id)=>{
    dispatch({
      type : 'remove',
      id
    })
  }
  const searchWord = (text)=>{
    dispatch({
      type : 'search',
      text
    })
  }
  const memoWord= useMemo(()=>{
    return{CreateWord,editWord,removeWord,searchWord}
  },[])

  return (
    <div className="App">
      <dicContext.Provider value={dics}>
        <editContext.Provider value={memoWord}>
       <Header />
    <main>
      <Find />
      <List />
    </main>         
        </editContext.Provider>
    </dicContext.Provider>
      <Footer />  
    </div>

  )
}

export default App
