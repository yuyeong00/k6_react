import TailButton from '../ui/TailButton'
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil'
import { rcnt } from './RecoilAtom'

export default function Recoil3() {
  
//   const cnt = useRecoilValue(rcnt);
//   const setCnt = useSetRecoilState(rcnt);

const [cnt, setCnt] = useRecoilState(rcnt);

  const handleUp = ()=>{
    setCnt(cnt+1)
  }
  return (
    <div className='w-full'>
      <TailButton caption='증가' color='blue'
                    handleClick={handleUp}  />
    </div>
  )
}
