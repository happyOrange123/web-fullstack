import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
//实现加减btn，置为零
// const App=(props)=>{
//     const [counter,setCounter]=useState(0);
//     const setTovalue=(value)=>setCounter(value)
    
//     return (
//         <div>
//         <Display counter={counter}/>
//         <Button onClick={()=>setTovalue(counter+1)} text='plus'/>
//         <Button onClick={()=>setTovalue(counter-1)} text='minus'/>
//         <Button onClick={()=>setTovalue(0)} text='zero'/>
//         </div>
//     )
// }
// const Display=({counter})=>{
//     return (
//         <div>{counter}</div>
//     )
// }
// const Button=({onClick,text})=>(
//     <button onClick={onClick}>{text}</button>
// )
//    ReactDOM.render(<App/>,document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
const History=(props)=>{
 if(props.allClicks.length===0){
     return (
         <div>
             the app is used by pressing the buttons
         </div>
     )
 }
 return (
     <div>
         button press history:{props.allClicks.join(' ')}
     </div>
 )
}
const Button=({handleClick,text})=>(
    <button onClick={handleClick}>{text}</button>
)
const Total=({good,neutral,bad})=>{
    if(good===0&&neutral===0&&bad===0){
        return<div>No feedback given</div>
    }else{
        const all=good+neutral+bad;
    const average=all===0?0:(good-bad)/all;
    const positive=all===0?0:good/all*100;
    return(
        <div>
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive} %</p>
        </div>
    )
    }
    
}
const Statistics=(props)=>{
    
    if(props.good===0&&props.neutral===0&&props.bad===0){
        return<div>No feedback given</div>
    }else{
        const all=props.good+props.neutral+props.bad;
        const average=all===0?0:(props.good-props.bad)/all;
        const positive=all===0?0:props.good/all*100;
        return(
            <div>
            <Display value={props.good} text="good"/>
            <Display value={props.neutral} text="neutral"/>
            <Display value={props.bad} text="bad"/>
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive} %</p>
            </div>
        )
    }
}
const Display=(props)=>(<div>{props.text} {props.value}</div>)
const App = (props)=>{
    // const [left,setLeft]=useState(0)
    // const [right,setRight]=useState(0)
    // const [allClicks,setAll]=useState([])
    // const [value,setValue]=useState(10)
    // const setToValue=(newValue)=>{
    //     setValue(newValue)
    // }
    const [good,setGood]=useState(0)
    const [neutral,setNeutral]=useState(0)
    const [bad,setBad]=useState(0)
    
    const setGoodValue=(newValue)=>{
        setGood(newValue)
    }
    const setNeutralValue=(newValue)=>{
        setNeutral(newValue)
    }
    const setBadValue=(newValue)=>{
        setBad(newValue)
    }
  
    // const handleLeftClick=()=>{
    //     setAll(allClicks.concat('L'))
    //     setLeft(left+1)
    // }
    // const handleRightClick=()=>{
    //     setAll(allClicks.concat('R'))
    //     setRight(right+1)
    // }
    // const [clicks,setClicks]=useState({
    //     left:0,right:0
    // })
    // const handleLeftClick=()=>{
    //     setClicks({
    //         ...clicks,
    //         left:clicks.left+1
    //     })
    // }
    // const handleRightClick=()=>{
    //     setClicks({
    //         ...clicks,
    //          right:clicks.right+1
    //      })
    // }
    // return (
    //     <div>
    //         <div>
    //             {left}
    //             <Button onClick={handleLeftClick} text='left'/>
    //             <Button onClick={handleRightClick} text='right'/>
    //             {right}
    //             <History allClicks={allClicks}/>
    //         </div>
    //     </div>
    // )

    return(
        <div>
            {/* <Display value={value}/>
            <Button handleClick={()=>setToValue(1000)} text="thousand"/>
            <Button handleClick={()=>setToValue(0)} text="reset"/>
            <Button handleClick={()=>setToValue(value+1)} text="increment"/> */}
            <h2>give feedback</h2>
            <br/>
            <Button handleClick={()=>setGoodValue(good+1)} text="good"/>
            <Button handleClick={()=>setNeutralValue(neutral+1)} text="neutral"/>
            <Button handleClick={()=>setBadValue(bad+1)} text="bad"/>
            <h2>statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad}/>
            {/* <Display value={good} text="good"/>
            <Display value={neutral} text="neutral"/>
            <Display value={bad} text="bad"/>
            <Total good={good} neutral={neutral} bad={bad}/> */}
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById('root'))
