import TailInput from "../ui/TailInput";
import TailSelect from "../ui/TailSelect";
import TailButton from "../ui/TailButton"
import { useState,useEffect,useRef } from "react";
import getxy from "./getxy.json"

export default function Frcst() {
    let ops = getxy.map(item => item["1단계"]);

    const [x, setX] = useState();
    const [y, setY] = useState();
    
    const dRef = useRef();
    const sRef = useRef();
    
    const handleDate = ()=>{
        let d = dRef.current.value.replaceAll('-','')
        console.log(d)
    }

    const handleArea = ()=>{
        console.log(sRef.current.value)
        let tm = getxy.filter(item=>item["1단계"]==sRef.current.value)
        setX(tm[0]["격자 X"])
        setY(tm[0]["격자 Y"])
    }

    useEffect(()=>{
        console.log(x,y)
        let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst`
        url = url + `?serviceKey=${process.env.REACT_APP_APIKEY}`
        url = url + `&pageNo=1&numOfRows=1000&dataType=json`
        url = url + `&base_date=${d}&base_time=0500&nx=${x}&ny=${y}`
    },[x,y])

    const handleDangi = () => {}

    const handleCho = () => {

    }


  return (
    <div className='w-11/12 justify-start
                    grid grid-cols-1 md:grid-cols-2 p-2 gap-2'>
      <div>
        <TailInput type="date" inputRef={dRef} ph={"날짜선택"} handleChange={handleDate}/>
      </div>
      <div>
        <TailSelect ops={ops} opDefault="---지역선택---" 
                    selRef={sRef} handleSel={handleArea}/>
      </div>
      <div>
        <TailButton caption="단기예보" color="blue" handleClick={handleDangi}/>
      </div>
      <div>
        <TailButton caption="초단기예보" color="blue" handleClick={handleCho}/>
      </div>
    </div>
  )
}
