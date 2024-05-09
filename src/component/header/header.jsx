import { useState } from 'react';

const Header = ()=>{
    let now = new Date();
    const nowTime = () => {
        let now = new Date();
        let hour = now.getHours();
        let minute = now.getMinutes();
        let second = now.getSeconds();
        return `${hour} : ${minute} : ${second}`
      }
    const [clock, setclock] = useState(nowTime); 
    setInterval(() => setclock(nowTime), 1000);
    const date = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;
    
    return(
        <header>
            <div className="flex w1000 headerWrap">
                <h1><a href="/">프론트엔드 사전</a></h1>
                <div className='flex timeWrap'>
                    <p>{date}</p>
                    <p>{clock}</p>   
                </div>  
            </div>
        </header>
    )
}

export default Header;
