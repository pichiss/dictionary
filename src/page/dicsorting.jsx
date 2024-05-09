const sortList = [
    {value : 'All', name : '전체'},
    {value : 'html', name : 'html'},
    {value : 'css', name : 'css'},
    {value : 'js', name : 'js'},
    {value : 'node', name : 'node'},
    {value : 'react', name : 'react'}
]


const SortSelect = ({value, onChange})=>{
    function optChange(e){
        onChange(e.target.value)
    }
    return(
        <select key={value} value={value} onChange={optChange}>
            {sortList.map((sort)=>
                <option key={sort.value} value={sort.value}>{sort.name}</option>
            )}
        </select>
    )
}

export default SortSelect;