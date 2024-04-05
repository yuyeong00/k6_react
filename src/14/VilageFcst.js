import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import getcode from './getcode.json';
import TailSelect from "../ui/TailSelect";

export default function VilageFcst() {

  const dt = useParams().dt;
  const area = useParams().area;
  const x = useParams().x;
  const y = useParams().y;
  const gubun = '단기예보'
  
  // console.log(dt,area,x,y);

  //셀렉트박스 옵션
  const ops = getcode.filter(item=> item.예보구분 === gubun)
                  .map(item=>`${item.항목명}-${item.항목값}`)

  const itemRef = useRef();
                  
  const [tdata, setTdata] = useState();

  const [tags, setTags] = useState();

  const [selItem, setSelItem] = useState();
  const [selItemName, setSelItemName] = useState();



  const handleItem = ()=>{
    console.log(itemRef.current.value)
    setSelItemName(itemRef.current.value.split('-')[0]);
    setSelItem(itemRef.current.value.split('-')[1]);
  }



  const getData = async(url)=>{
    const resp = await fetch(url);
    const data = await resp.json();
    setTdata(data.response.body.items.item)
  }

  useEffect(()=>{
    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`
    url = url + `serviceKey=${process.env.REACT_APP_APIKEY}&pageNo=1&numOfRows=1000&dataType=json&`
    url = url + `base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`
    getData(url);
  },[])


  useEffect(()=>{
    console.log(selItem)
    if (!tdata) return;
    let tm = tdata.filter(item=>item.category===selItem)
                    .map(item=>
      <tr className="h-10 p-1" key={item.fcstDate + item.fcstTime}>
          <td className="text-center">
            {selItemName}
          </td>
          <td className="text-center">
              {`${item.fcstDate.substr(0,4)}-${item.fcstDate.substr(4,2)}-${item.fcstDate.substr(6,2)}`}
          </td>
          <td className="text-center">
              {`${item.fcstTime.substr(0,2)}-${item.fcstTime.substr(2)}`}
          </td>
          <td className="text-center">
              {item.fcstValue}
          </td>
      </tr>
      );
      setTags(tm);
  },[selItem])


  return (
    <div className="w-11/12">
      <div>
        <div className="flex justify-center items-center
                        mt-5 p-5">
          <h1 className="font-bold text-2xl">
            {`${area} ${gubun} ${dt.substring(0,4)}-${dt.substring(4,6)}-${dt.substring(6,8)}`}
          </h1>
        </div>
        <div className="mb-5 flex justify-center items-center">
        <TailSelect ops={ops} opDefault="항목선택" 
                    selRef={itemRef} handleSel={handleItem}/>
        </div>
      </div>
      <table className="border-collapse border-slate-400
              w-full border-2 mb-10">
        <thead>
          <tr className="h-11 text-center bg-slate-900 text-white">
            <th className="border border-slate-300">항목</th>
            <th className="border border-slate-300">예측 일자</th>
            <th className="border border-slate-300">예측 시간</th>
            <th className="border border-slate-300">예측값</th>
          </tr>
        </thead>
        <tbody>
          {tags}
        </tbody>
      </table>
    </div>
  )
}
