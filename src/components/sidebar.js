import { useState } from "react";
import { BsCheck2, BsCheck2Square, BsCheckSquareFill, BsSquare } from "react-icons/bs";
var arr = [],currentArr=[],Setter;
function Checker({value}){
    const [checked,setCheck] = useState(true);
    var key = Object.keys(value)[0];
    function onCheck(){
       // var current = currentArr;
        if(key!=="cost"){
            if(checked){
                
                currentArr = currentArr.filter(function(indexValue){
                    return indexValue.values[key] !== value[key];
                });
            }else{
                currentArr = currentArr.concat(arr.filter(function(indexValue){
                    return indexValue.values[key] === value[key];
                }));
            }
            
        }else{
            if(checked){
                currentArr = currentArr.filter(function(indexValue){
                    if(value[key]>8000000000){
                        return indexValue.values[key] <200;
                    }
                    return indexValue.values[key] >= value[key];
                })
            }else{
                currentArr = currentArr.concat(arr.filter(function(indexValue){
                    if(value[key]>8000000000){
                        return indexValue.values[key] >=200;
                    }
                    return indexValue.values[key] < value[key];
                }));
            }
        }
        setCheck(!checked);
        Setter(currentArr);

    };
    return (
        <>
            {
                checked?<BsCheckSquareFill onClick={onCheck} color="red" style={{marginRight:7,cursor:"pointer"}}/>: <BsSquare onClick={onCheck} style={{marginRight:7,cursor:"pointer"}}/>
            }
        </>
    );
}

export default function SideBar({changeContent,elementsArr}){
    arr=elementsArr;
    currentArr = elementsArr;
    Setter = changeContent;
    return(
    <>
        
        <div className="categories" style={{borderRight:"1px solid rgba(0,0,0,0.1)",width:170,position:"sticky",top:90,marginTop:20,lineHeight:1.5}}>
            <div><h4 style={{borderBottom:"1px solid red",display:"inline",textTransform:"uppercase",marginLeft:10}}>Categories</h4></div>
            <div className="list1" style={{
                display:"flex",flexDirection:"column",padding:"1rem"
            }} >
            <span>
                <Checker value={{category:"boots"}} />
            <span className="link" >Boots</span>
            </span>
            <span>
                <Checker value={{category:"heels"}} />
            <span className="link" >Heels</span>
            </span>
            
            <span>
                <Checker value={{category:"slippers"}} />
            <span className="link" >Slippers</span>
            </span>
            
            <span>
                <Checker value={{category:"sneakers"}} />
            <span className="link" >Sneakers</span>
            </span>
            
            <span>
                <Checker value={{category:"safety"}} />
            <span className="link" >Work & Safety</span>
            </span>
            
            <span>
                <Checker value={{category:"loafers"}} />
            <span className="link" >Loafers</span>
            </span>
            
            <span>
                <Checker value={{category:"sandals"}} />
            <span className="link" >Sandals</span>
            </span>
            </div>
            <div><h4 style={{borderBottom:"1px solid red",display:"inline",textTransform:"uppercase",marginLeft:10}}>Brands</h4></div>
            <div className="list1" style={{
                display:"flex",flexDirection:"column",padding:"1rem"
            }} >
            
            <span>
                <Checker value={{brand:"nike"}} />
            <span className="link" >Nike</span>
            </span>
            
            <span>
                <Checker value={{brand:"addidas"}} />
            <span className="link" >Addidas</span>
            </span>
            
            <span>
                <Checker value={{brand:"converse"}} />
            <span className="link" >Converse</span>
            </span>
            
            <span>
                <Checker value={{brand:"madden"}} />
            <span className="link" >Madden Girl</span>
            </span>
            
            <span>
                <Checker value={{brand:"birk"}} />
            <span className="link" >Birkenstock</span>
            </span>
            
            <span>
                <Checker value={{brand:"vans"}} />
            <span className="link" >Vans</span>
            </span>
            
            <span>
                <Checker value={{brand:"crocks"}} />
            <span className="link" >Crocs</span>
            </span>
            </div>
            <div><h4 style={{borderBottom:"1px solid red",display:"inline",textTransform:"uppercase",marginLeft:10}}>Price</h4></div>
            <div className="list1" style={{
                display:"flex",flexDirection:"column",padding:"1rem"
            }} >
            
            <span>
                <Checker value={{cost:50}} />
            <span className="link" >Less than $50</span>
            </span>
            
            <span>
                <Checker value={{cost:100}} />
            <span className="link" >Less than $100</span>
            </span>
            
            <span>
                <Checker value={{cost:200}} />
            <span className="link" >Less than $200</span>
            </span>
            
            <span>
                <Checker value={{cost:9000000000}} />
            <span className="link" >$200 & Above</span>
            </span>
            </div>
        </div>
    </>
    );
}