import { useSearchParams } from "react-router-dom"

export default function RoutePage2() {

  const [params] = useSearchParams();
  console.log(params.get('item1'))
  console.log(params.get('item2'))
  return (
    <div>
      라우트 페이지2 : {params.get('item1')},{params.get('item2')}
    </div>
  )
}
