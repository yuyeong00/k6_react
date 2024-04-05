import TailInput from "../ui/TailInput";
import TailSelect from "../ui/TailSelect";
import TailButton from "../ui/TailButton";
import getxy from "./getxy.json";
import { useState,useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Frcst() {
  const navigator = useNavigate();
  const ops = getxy.map(item => item["1단계"]);

  const [dt, setDt] = useState();
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [area, setArea] = useState();

    
  const dRef = useRef();
  const sRef = useRef();
    
  const handleDate = ()=>{
    setDt(dRef.current.value.replaceAll('-',''));
  }

  const handleArea = ()=>{
    console.log(sRef.current.value);
    let tm = getxy.filter(item=>item["1단계"]===sRef.current.value);
    setArea(sRef.current.value)
    setX(tm[0]["격자 X"]);
    setY(tm[0]["격자 Y"]);
  }

  //초단기예보 단기예보 주소값 전달하는 방식 똑같음 => 하나의 함수를 씀 
  // => ()=>{}콜백함수형태로 소괄호 안의 매개변수로 전달하여 사용
  const handleFrcst = (loc) => {
    if (dt === '' || dt === undefined){
      alert('날짜를 선택하세요')
      dRef.current.focus();
      return;
    }
    if (area ==='' || area === undefined){
      alert('지역를 선택하세요')
      sRef.current.focus();
      return;
    }
    // navigator(`/${loc}/${dt}/${area}/${x}/${y}`);

    let gubun='';

    if (loc=='ultra') gubun = '초단기예보';
    else gubun = '단기예보';
    navigator(`/flist?dt=${dt}&area=${area}&x=${x}&y=${y}&gubun=${gubun}`);
  }




  return (
    <div className='w-11/12 justify-start
                    grid grid-cols-1 md:grid-cols-2 p-2 gap-2'>
      <div>
        <TailInput type="date" inputRef={dRef} ph={"날짜선택"} 
                    handleChange={handleDate}/>
      </div>
      <div>
        <TailSelect ops={ops} opDefault="---지역선택---" 
                    selRef={sRef} handleSel={handleArea}/>
      </div>
      <div>
        <TailButton caption="초단기예보" color="blue"
                    handleClick={() => {handleFrcst('ultra')}}/>
      </div>
      <div>
        <TailButton caption="단기예보" color="blue"
                    handleClick={() => {handleFrcst('vilage')}}/>
      </div>
    </div>
  )
}
