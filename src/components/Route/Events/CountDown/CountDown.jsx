import React, { useEffect, useState } from 'react';

const CountDown = () => {
  const [timeLeft,setTimeLeft]=useState(CountDown())
  useEffect(()=>{
    const timer= setTimeout(() => {
        setTimeLeft(CountDown())
    }, 1000);
    return ()=>clearTimeout(timer)
  })

    function CountDown() {
        const difference= new Date("2023-9-8")-new Date()
        let timeLeft={}
        if (difference>0) {
            timeLeft={
                days:Math.floor(difference/(1000*60*60*24)),
                hours:Math.floor(difference/(1000*60*60)%24),
                minutes:Math.floor(difference/(1000*60)%60),
                seconds:Math.floor(difference/(1000)%60)
            }
           
        }
         return timeLeft
    }
    const timerComponents=Object.keys(timeLeft).map((v)=>{
        if(!timeLeft[v]){
            return null
        }
        return <span className=' text-[green]'>{timeLeft[v]}{" "} {v}{" "}</span>
    })
    return (
        <div>
            {timerComponents.length?timerComponents:<span className='text-[red]'>TIME UP..!</span>}
        </div>
    );
};

export default CountDown;


// import React, { useState,useEffect } from 'react';

// const CountDown = () => {
//     const [timeLeft,setTimeLeft]=useState(calculateTimeLeft())
//     useEffect(()=>{
//      const timer=setTimeout(()=>{
//         setTimeLeft(calculateTimeLeft())
//      },1000)
//      return ()=> clearTimeout(timer)
//     })
//     function calculateTimeLeft(){
//         const difference = +new Date("2023-5-28") -+new Date()
  
//         let timeLeft={}
//         if(difference>0){
//             timeLeft={
//                 days:Math.floor(difference/86400000),
//                 hours:Math.floor((difference/3600000)%24),
//                 minutes:Math.floor((difference/1000/60)%60),
//                 seconds:Math.floor((difference/1000)%60),

//             }
            
//         }
//         return timeLeft;



//     }
//     const timerComponents= Object.keys(timeLeft).map((interval)=>{
//         if(!timeLeft[interval]){
//             return null
//         }
//        return <span className='text-[25px] text-[#475ad2]'>{timeLeft[interval]}{" "}{interval}{" "}</span>
//     })
//     return (
//         <div>
//            {timerComponents.length?timerComponents:<span className='text-[red] text-[25px]'>Time's Up!</span>}
//         </div>
//     );
// };

// export default CountDown;


