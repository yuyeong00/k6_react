import TailBall from "../ui/TailBall"
import TailButton from "../ui/TailButton"
import { useState } from "react";

export default function Lotto() {
  const [ballTags, setBallTags] = useState();
  
  const handleLottoClick = ()=> {
    let nums = [];

    while (nums.length < 7){
      let n = Math.floor(Math.random() * 45) + 1  ;
      if (!nums.includes(n)) nums.push(n);
    }
    
    console.log(nums)
    nums.splice(6,0,'+');

    const tm = nums.map((item, idx) =>{
      // idx === 6 ? <span className="text-2xl font-bold mx-2"
      //                   key={`ball${item}`}>{item}</span>
      //   : <TailBall n={item} key={`ball${item}`} />})

      if (idx===6) return <span className="font-bold text-2xl m-2">{item}</span>
      else return <TailBall n={item} key={`ball${item}`}/>})
    
    setBallTags(tm);
  }
  
  return (
    <div>
      <div className="flex justify-center items-center">
        {ballTags}
      </div>
      <div className="flex justify-center">
        <TailButton caption={'로또번호 생성'}
                    color='blue'
                    handleClick={handleLottoClick}/>
      </div>
      
    </div>
  )
}
