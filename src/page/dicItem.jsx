import { useContext, useState } from "react";
import { editContext } from "../App";
import { getLogo } from '../component/main/util'
import editIcon from '../assets/icons8-modify-64.png'
import remoIcon from '../assets/icons8-remove-50.png'
import checkIcon from '../assets/icons8-check-50.png'
import closeIcon from '../assets/icons8-close-50.png'



const DicItem = ({id,word,content,category,createDate})=>{
    const {removeWord, editWord}=useContext(editContext);
    const [update, setUpdate] = useState(true);
    const [editCont, setEditCont] = useState(content);

    function removeBtn(){
        if(window.confirm(`${word}을/를 삭제 하시겠습니까?`)){
           removeWord(id) 
        }
        
    }
    function editBtn(){
            setUpdate(!update)
    }
    function editChange(e){
        setEditCont(e.target.value)
    }
    function saveBtn(){
        if(window.confirm(`${word}을/를 수정 하시겠습니까?`)){
            editWord(id, editCont)
            editBtn()
         }

    }
    function cancleBtn(){
        setUpdate(!update)
    }
    return(
        <>
        <dl key={id}>
            <dt>
                <img 
                src={getLogo(category)} 
                alt={`${category}아이콘`}
                className={`icon_${category}`}
                ></img>
                {word}</dt>
            <dd>
            {update ?         
             <span>{content}</span>   
            : 
                <div>
                    <textarea className="editText" name="content" value={editCont} onChange={editChange}></textarea>
                </div>
            }
            <span>{createDate}</span>

            {update ?
            <div className="flex btnWrap">
                <div onClick={editBtn}><img src={editIcon} alt="edit Icon" /></div>
                <div onClick={removeBtn}><img src={remoIcon} alt="remove Icon" /></div>                
            </div>
                : 
            <div className="flex btnWrap">
                <div onClick={saveBtn}><img src={checkIcon} alt="check icon" /></div>
                <div onClick={cancleBtn}><img src={closeIcon} alt="cancle icon" /></div>    
            </div>
                }
            </dd>        
        </dl>
    </>

    


    )
}

export default DicItem;