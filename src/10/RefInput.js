import TailInput from "../ui/TailInput"
import TailButton from "../ui/TailButton"
import { useState, useRef, useEffect } from "react"

export default function RefInput() {

    const inputRef = useRef();
    const [bts, setBts] = useState([]); //버튼의 캡션
    const [tags, setTags] = useState([]);

    const handleAdd = ()=>{
        if (inputRef.current.value === '' ) {
            alert("값을 입력하세요")
            inputRef.current.focus();
            return;
        }
        console.log(inputRef.current.value)

        setBts([...bts, inputRef.current.value]); //원래거에 입력된 밸류 추가
    }

    useEffect(()=>{
        inputRef.current.value = '';
        inputRef.current.focus()
        let tm = bts.map((item,idx) => 
            <TailButton caption={item} 
                        key={`bt${idx}`}
                        color="orange"/>
        )
        setTags(tm);
    },[bts])

    
    const handleCancel = () => {
        setBts([]);
        setTags([]);
    }


  return (
    <>
    <div className="w-11/12 flex justify-center items-center
                    bg-slate-300">
        <div className="w-1/3">
            <TailInput type="text" 
                        inputRef={inputRef} 
                        ph="값입력" />
        </div>
        <div>
            <TailButton caption="등록" 
                        color="blue"
                        handleClick={handleAdd}/>
            <TailButton caption="취소" 
                        color="blue"
                        handleClick={handleCancel}/>
        </div>
    </div>
    <div className="w-11/12 h-1/4 border p-5 bg-slate-200
                    flex justify-center items-center">
        <BoxOfficeTb/>
    </div>
    </>
  )
}
