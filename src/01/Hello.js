import './Hello.css';

function Hello() {
    let n = Math.floor(Math.random()*99)+1;

    const st1 = { //인라인 스타일 쓰고싶을때 오브젝트로 만들어서
        backgroundColor:"darkblue", //키값은 카멜표기법으로 작성
        color:"white"
    }

    // let s = '';
    // if (n % 2 === 0) s = "짝수";
    // else s = "홀수";
    // jsx에서는 if 문 안쓰고 삼항연산자 사용

    let x;

    const currentTime = new Date() ;


    return (
        <h1>
            <p>
                {currentTime.toLocaleTimeString()}
            </p>
            <span style={st1}>Hello</span>
            <span style={{display:"inline-flex",margin:"30px"}}>
                {/* { n < 10 && "0" }
                {n} */}
                {n<10 ? `0${n}`: n}
            </span>
            {/* 안쪽 중괄호는 오브젝트 */}
            { n % 2 === 0 ? "짝수" : "홀수"}
            { n % 2 === 0
            ? <span style={{color:"red"}}>짝수</span>
             : <span style={{color:"blue"}}>홀수</span>}
            
            { n % 2 ===0 && "🍎"}
            { n % 2 ===1 && "🥕"}
            {/* <p>{ x || "x는 undefinded입니다."}</p> */}

            
        </h1>
    );
  
}

export default Hello ;