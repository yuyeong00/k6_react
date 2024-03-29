import GalleryCard from './GalleryCard'
import TailInput from '../ui/TailInput'
import TailButton from '../ui/TailButton'
import { useRef, useState, useEffect } from 'react'

export default function GalleryMain() {

  const keyword = useRef();
  const [tdata, setTdata] = useState();
  const [tags, setTags] = useState();

  useEffect (()=>{
    if (!tdata) return;
    
    let tm = tdata.map(item =>
            <GalleryCard imgUrl={item.galWebImageUrl.replace('http:','https:')}
                        title={item.galTitle} 
                        ptitle={item.galPhotographyLocation} 
                        ktag={item.galSearchKeyword} 
                        key={item.galContentId}/>
    )
    setTags(tm)
  },[tdata])
  
  const getData = (w)=>{
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
    url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`
    url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`
    url = url + `&keyword=${w}&_type=json`
    // console.log(url)

    fetch(url)
    .then(r => r.json())
    .then(d => setTdata(d.response.body.items.item))
    .catch(err => console.log(err))
  }

  const handleFetch = () => {
    if (keyword.current.value===''){
        alert('키워드를 입력하세요')
        keyword.current.focus();
        return;
    }
    let w = encodeURI(keyword.current.value)
    getData(w);
  }

  const handleClear = () => {
    setTdata('');
    setTags('');
    keyword.current.value = '';
    keyword.current.focus();
  }


  return (
    <div className="w-11/12 flex flex-col
                    h-full justify-start items-center">
        <div className="w-11/12 flex flex-col justify-center items-center
                    bg-slate-300
                    my-5 py-4">
            <div>
                <h1 className='font-bold text-3xl
                                text-center m-5
                                text-slate-800'>
                    한국관광공사 관광사진 정보
                </h1>
            </div>
            <div className='w-11/12 justify-center items-center
                            grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className=''>
                    <TailInput type="text" 
                                inputRef={keyword}
                                ph="키워드를 입력하세요" />
                </div>
                <div className=''>
                    <TailButton caption="조회" 
                                color="blue"
                                handleClick={handleFetch}/>
                </div>
                <div className=''>
                    <TailButton caption="취소" 
                                color="blue"
                                handleClick={handleClear}/>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                        gap-4
                        w-11/12'>
            {tags}
        </div>
    </div>
  )
}
