import MyList from "./MyList";
import listData from "./MyListData.json";

export default function MyListMain() {
    console.log(listData)
// 한개 만들어서 맵함수로 반복문
    const myItems = listData.map( item =>
        <MyList title={item.title} 
                imgUrl={item.imgUrl} 
                content={item.content}
                key={item.title} /> //key : 컴포넌트를 구분할 수 있게. 유일한 값이 될 수 있도록.
    );
  return (
    <div className="w-10/12 
                    grid grid-cols-1 
                    md:grid-cols-2 
                    lg:grid-cols-2
                    gap-4">
        {myItems}
    </div>
  )
}
