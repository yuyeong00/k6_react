import { useState, useEffect } from "react";
import TrafficNav from "./TrafficNav";

export default function TrafficMain() {
  // 컴포넌트의 저장장소 state변수
  // 전체 패치 데이터(17개)
  const [tdata,setTdata] = useState() ; // useState를 실행시키면 값을 두개 돌려줌
  // 1. 변수명 2. 이 변수를 세팅(저장)하는  ==>내가 원하는 이름으로 구조분해 할당
  
  // 대분류 (중복제거)
  const [c1, setC1] = useState() ; 
  //선택된 대분류 (tailnav에서 사용)
  const [selC1, setSelC1] = useState() ; 

  // 중분류 (중복제거)
  const [c2, setC2] = useState();
  // 선택된 중분류
  const [selC2, setSelC2] = useState();

  //상세정보
  const [detail, setDetail] = useState();
  const [info, setInfo] = useState();
  
  // 자바스크립트 패치 문법 함수 //url데이터 줘 하고 요청
  const getDataFetch = (url) => {
    fetch(url) //비동기방식 : 데이터 오는동안 다른 일 가능
    .then(resp => resp.json()) // 데이터는 응답 가지고옴
    // 변수명 아무거나. json형태로 바꿔줘 : 비동기방식
    .then(data => setTdata(data.data)) //then chaning 위에거가 끝나야 아래가 실행
    .catch(err => console.log(err))
  }

  
  useEffect(()=>{
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`
    url = `${url}page=1&perPage=20&`
    url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}`;

    console.log('url = ' , url)

    getDataFetch(url)
  },[]);

  useEffect(()=>{
    // console.log("tdata = ",tdata)

    // 필요한 데이터 가져온 곳에서 c1 중복제거
    if (!tdata) return ;
    let tm = tdata.map(item => item.사고유형_대분류)
    console.log("tdata = ", tm);

    tm = new Set(tm);
    tm = [...tm]
    console.log("대분류 = ", tm)

    setC1(tm)

  }, [tdata]);

  useEffect(()=>{
    console.log("selC1 = " , selC1) // selC1 = 선택된 셀

    // 대분류 선택하면 중분류 c2 나오게
    // 대분류가 c1인것을 가져와서 필터링
    if (!tdata) return;
    let tm = tdata.filter(item => item.사고유형_대분류 === selC1)
                          .map(item => item.사고유형_중분류);
    setC2(tm)
    setInfo('') // 대분류 중분류 선택 후 나온 인포를 / 다시 대분류 눌렀을때 초기화

  },[selC1]);
  
  useEffect(()=> {
    console.log("selC2 = ", selC2)
    if (!tdata) return;
    let tm = tdata.filter(item => item.사고유형_대분류 === selC1 
                                  && item.사고유형_중분류 === selC2)
    
    setDetail(tm[0])
  },[selC2])


  useEffect(()=>{
    console.log("detail = ", detail)
    if (!tdata) return;
    const keyArr = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수']
    let tm = keyArr.map(k => 
      <div className="w-full h-10 border my-3
                      flex justify-center items-center
                      font-bold text-xl"
            key={k}>
        <div className="w-1/2 h-full bg-slate-100
                        flex justify-center items-center">
          {k}
        </div>
        <div className="w-1/2 h-full bg-slate-500 text-slate-50
                        flex justify-center items-center">
          {parseInt(detail[k])}
        </div>
      </div>
      );
      setInfo(tm)
  },[detail]);


  return (
    <div className="w-full h-full mt-5
                    flex flex-col justify-start items-center">
      {c1 && <TrafficNav title="대분류"
                  category={c1}
                  sel={selC1}
                  setSel={setSelC1} />
    }
      {c2 && <TrafficNav title="중분류"
                  category={c2}
                  sel={selC2}
                  setSel={setSelC2} />
    }
      <div className="w-10/12 
                    grid grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-5
                    gap-4">
        {info}
      </div>
    </div>
  );
}
