import Write from "../../page/write";
import Dicsearch from "../../page/dicsearch";
import {useState} from 'react';


const Find = ()=>{
    const [addBtn, setAddBtn] = useState(true);
    function plusBtn(){
        setAddBtn(!addBtn)
    }
    return(
        <div className='w1000'>
            <ul className="flex findWrap">
                <li>단어 검색</li>     
                <li className="plusIcon" onClick={plusBtn}>+</li> 
            </ul>
            {addBtn ?  null :  <Write /> }
            <Dicsearch />
        </div>
    )
}

export default Find;