export default function Title({title, list}){
    console.log(title + ' ' + list);
    //console.log(list);
    
    return (
        <div>
            <h1>{title}</h1>
            {list.map((nameGame, index)=>{
                const uniqueKey= `${nameGame}`+`${index}`
                return(
                    <p id={uniqueKey} key={uniqueKey}>{nameGame}</p>
                )
            })}
        </div>
    )
}   

