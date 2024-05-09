import {useContext, useState} from 'react';
import {dicContext} from '../../App'
import DicItem from '../../page/dicItem';
import SortUl from '../../page/dicsorting copy';


const List = ()=>{
    const datas = useContext(dicContext);
    const [optList, setOptList] = useState('All')
    const getSortiList = ()=>{
            const sortItem = (item)=>{
                switch(optList){
                    case 'html' :
                        return item.category === 'html';
                    case 'css' :
                        return item.category === 'css';
                    case 'js' :
                        return item.category === 'js';
                    case 'node' :
                        return item.category === 'node';
                    case 'react' :
                        return item.category === 'react';    
                    default :
                        return null  
                }
            }
        
        const copyList = JSON.parse(JSON.stringify(datas))
        const sortList = optList === 'All' ? copyList : copyList.filter((item)=>sortItem(item) )
    return sortList
}


    return(
        <>
        <SortUl id={optList} onclick={setOptList} />
        <h2>목록</h2>
        <ul className='w1000 listWrap'>
            
            {getSortiList().map((data)=><DicItem key={data.id} {...data}/>)}
        </ul>
        
        </>
    )
}

export default List;