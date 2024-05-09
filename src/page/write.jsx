import { useContext } from "react";
import DicInput from "../hook/dicInput";
import { editContext } from "../App";

const Write = ()=>{
    const [{word,content,category},onchange, reset]=DicInput({
        word : '',
        content :'',
        category : '' 
    });

    const {CreateWord}=useContext(editContext);
    const createBtn = ()=>{
        // const cate = category === undefined ? 'html': category
        let cate
        if(category === undefined || category=== ''){
            cate = 'html'
        }else{
            cate = category
        }
        if(window.confirm(`${word}을/를 등록 하시겠습니까?`)){
            CreateWord(word,content,cate)
            reset()
         }


    }
    return(
        <div className="writeWrap">
        <div>
            <label>단어 : </label>
            <input type="text"name="word" value={word} onChange={onchange}></input>
        </div>
        <div>
            <label>설명 : </label>
            <textarea name="content" value={content} onChange={onchange}></textarea>            
        </div>
        <div>
            <label>분류 : </label>
            <select name="category" value={category} onChange={onchange}>
                <option value={'html'}>HTML</option>
                <option value={'css'}>CSS</option>
                <option value={'js'}>JS</option>
                <option value={'node'}>NODE</option>
                <option value={'react'}>REACT</option>
            </select>        
        </div>
        <button className="btn" onClick={createBtn}>저장</button>
    </div>
    )
}


export default Write;