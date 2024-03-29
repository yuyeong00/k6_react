import { useState, useRef, useEffect } from "react"
import GalleryCard from "./GalleryCard"

export default function BfestMain() {
  // 1. 부산축제전체 데이터 가져올 state변수
  const [tdata, setTdata] = useState();
  const [guname, setGuname] = useState(); // 4. 데이터 패치하는 시점에 구 정보
  const [optags, setOptags] = useState(); // 5. 구 결정되면 셀렉트옵션
  const selRef = useRef(); // 6. 선택한 구를 잡을 useRef
  const [tags, setTags] = useState(); // 7. 구가 바뀌고 띄울 카드 변수

  // 2. 부산축제 데이터 fetch, []안에 아무것도 없으면 페이지 처음 렌더링 한번만 실행
  useEffect(()=>{
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`
        url = url + `&pageNo=1&numOfRows=40&resultType=json`
        
        getData(url);
  }, []);

  // 3. 실제 패치
  const getData = (url)=>{
    fetch(url)
    .then(resp=> resp.json())
    .then(data=> setTdata(data.getFestivalKr.item))
    .catch(err=> console.log(err))
  }

  // 4. t데이터 생기는 시점에 state변수생성 구정보 중복되지않게
  useEffect(()=>{
    if (!tdata) return;
    let tm = tdata.map(item => item.GUGUN_NM)
    // console.log("gugun name = ", tm)
    tm = new Set(tm); //중복제거
    tm = [...tm].sort(); //정렬
    // console.log("중복제거한 gugun name = ", tm)
    setGuname(tm);
  },[tdata])

  // 5. 구 정보 중복 안되게 한 다음 구 이름 => state변수생성, 셀렉트박스의 옵션 만들기
  useEffect(()=>{
    if (!guname) return;
    // console.log(guname)
    let tm = guname.map(item =>
      <option value={item} key={item}>{item}</option>
    )
    setOptags(tm);
  },[guname])

  // 6. 선택한 구를 잡기 위해 useRef사용, 함수 만들기
  const handleSelGu = () => {
    let gu = selRef.current.value;
    console.log(gu);

  // 7. 구가 바뀔때 ==> 해당하는 구의 축제목록만 필터
    let tm = tdata.filter(item => item.GUGUN_NM === gu)
                      .map(item =>
  // 8. 필터.맵 해서 카드 띄우기
    <GalleryCard imgUrl={item.MAIN_IMG_THUMB}
            title={item.PLACE} 
            ptitle={item.TITLE}
            ktag={item.MAIN_PLACE}
            key={item.UC_SEQ}/>
                        )
    setTags(tm);
  }




  return (
    <div className="w-11/12 h-full flex flex-col
                    justify-start items-center">
      <div className="w-11/12 flex flex-col justify-center items-center
                    bg-slate-300
                    my-5 py-4">
            <div>
                <h1 className='font-bold text-3xl
                                text-center m-5
                                text-slate-800'>
                    부산광역시 축제 정보
                </h1>
            </div>
            <form className="w-3/5 h-full mx-auto flex justify-center items-center">
                <label htmlFor="gu" className="w-1/4 h-full m-2 text-lg font-bold
                 text-white rounded-xl bg-slate-400 text-center
                 flex justify-center items-center">
                    지역선택</label>
                <select onChange={handleSelGu}
                        ref = {selRef}
                        id="gu" className="h-full w-3/4 p-2.5 bg-gray-50 border border-gray-300
                                text-gray-900 text-base rounded-lg focus:ring-blue-500
                                focus:border-blue-500 block">
                    <option value>--- 구 선택 ---</option>
                    {optags}
                </select>
            </form>
        </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                      gap-4
                      w-11/12'>
        {tags}
      </div>
    </div>
  )
}
