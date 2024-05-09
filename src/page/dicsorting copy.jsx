const sortList = [
    {id : 'All', name : '전체'},
    {id : 'html', name : 'html'},
    {id : 'css', name : 'css'},
    {id : 'js', name : 'js'},
    {id : 'node', name : 'node'},
    {id : 'react', name : 'react'}
]


const SortUl = ({id, onclick})=>{
    function optChange(e){
        onclick(e.target.id)
    }
    return(
        <ul id={id} onClick={optChange} className="flex w1000 navIcon">
            {sortList.map((sort)=>
                <li key={sort.id} id={sort.id}>{sort.name}</li>
            )}
        </ul>
    )
}

export default SortUl;