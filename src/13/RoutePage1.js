import { useParams } from "react-router-dom"

export default function RoutePage1() {

  const item = useParams().item;
  
  return (
    <div>
      라우트 페이지1 : {item}
    </div>
  )
}
