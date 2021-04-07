import React,{useState,useEffect} from 'react';
function Baby(props) {
    const [isgetData,setisgetData]=useState(false);
    const ajaxS=()=>{setTimeout(()=>setisgetData(true),3000)};
    useEffect(()=>ajaxS(),[]);
    useEffect(()=>{
        const textH=document.querySelector(".talk");
        textH.append("fater!");
        return ;//textH.innerHTML="";
});
    return (!isgetData?"Loading":"baby here");
}
export default Baby;