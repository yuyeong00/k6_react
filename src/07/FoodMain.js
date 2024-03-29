import FoodCard from "./FoodCard";
import fdata from "./fooddata.json";
import TailButton from "../ui/TailButton"
import { useState } from "react";

export default function FoodMain() {

  // cards 를 state변수로 지정
  const [cards, setCards] = useState();

  // "운영주체 분류" 항목들을 c1으로 가져오기
  let c1 = fdata.map(item => item["운영주체 분류"]);
  c1 = new Set(c1) // 중복제거
  c1 = [...c1] // 어레이로 변경
  console.log(c1)

  // 운영주체 분류 c1에 따라 구분될 버튼 생성
  const c1bts = c1.map(item =>
    <TailButton key={item} caption={item} 
                color={"blue"}
                handleClick={() => handleList(item)}/>)

  // 버튼 클릭 시 citem에 해당하는 것만 나옴
  const handleList = (citem) => {
    console.log(citem)
    // 필터링해서 카드를 만듦
    const tm = fdata.filter(item=> item["운영주체 분류"]===citem)
                  .map(item =>
                    <FoodCard fobj = {item} key={item.사업장명}/>
    );
    setCards(tm)
  }




  
  

  return (
    <div className="flex flex-col justify-start items-center
                    w-full h-full">
        <div className="flex justify-center items-center
                        w-full h-60
                        bg-slate-300">
            {c1bts}
        </div>
        <div className="w-11/12 grid grid-cols-1 
                        md:grid-cols-2 
                        xl:grid-cols-3
                        gap-4">
            {cards}
        </div>
    </div>
  );
}
