import logo from "../logo.svg";

function MainHeader() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default MainHeader;

// html과 js함께쓸수있는 jsx문법
// 리액트에 class라는 예약어가 있어서
// 다르게 바꿔서 써야 됨. 카멜표기법으로