import { GiGlassHeart } from "react-icons/gi";
//state(상태)변수 상태변화를 감지하는
import {useState} from "react";

export default function MyList({title,imgUrl,content}) {
    //지역변수
    let cnt = 0;

    //state변수 
    const [stCnt, setStCnt]= useState(0); //hook을 호출

    const handleLike = (t)=>{
        console.log('handle Like '+t)
        cnt = cnt + 1;
        console.log(`cnt = ${cnt}`)
        setStCnt(stCnt+1)
    };
  return (
    <div className="w-11/12
                    flex
                    border-2 border-slate-400
                    bg-slate-50
                    hover:bg-slate-200
                    p-3
                    ">
        <div className="w-1/4 flex items-center">
            <img className="rounded-full" src={imgUrl} alt="img" />
        </div>
        <div className="w-3/4 p-2">
            <h1 className="font-bold text-2xl
                         pb-3">
                {title}
            </h1>
            <p className="text-gray-600">
                {content}
            </p>
            <p className="w-full flex justify-end items-center
                        font-bold
                        mt-6">
                <span className="text-xl" 
                                onClick={()=>{handleLike(title)}}>
                    <GiGlassHeart className="text-red-600 text-3xl hover:cursor-pointer
                                            hover:text-red-900" />
                </span>
                <span className="mx-3">좋아요</span>
                <span>{stCnt}</span>
            </p>
        </div>
    </div>
  )
}
