import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function Home() {
  const [backgroundColor, setBackgroundColor] = useState('#282c34');

  const changeBackgroundColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <header className="App-header">
        <button onClick={changeBackgroundColor}>배경 색 변경</button>
        <Link to="/time">
          <button>현재 시간 보기</button>
        </Link>
        <Link to="/hello">
          <button>Hello World 페이지</button>
        </Link>
        <Link to="/naver" target="_blank">
          <button>Naver로 이동</button>
        </Link>
      </header>
    </div>
  );
}

function TimePage() {
  const currentTime = new Date().toLocaleString();
  return (
    <div className="App">
      <header className="App-header">
        <h1>현재 시간: {currentTime}</h1>
        <Link to="/">
          <button>홈으로 돌아가기</button>
        </Link>
      </header>
    </div>
  );
}

function HelloPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <Link to="/">
          <button>홈으로 돌아가기</button>
        </Link>
      </header>
    </div>
  );
}

function NaverPage() {
  window.location.href = "https://www.naver.com";
  return null; // 컴포넌트는 렌더링할 필요 없음
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/time" element={<TimePage />} />
        <Route path="/hello" element={<HelloPage />} />
        <Route path="/naver" element={<NaverPage />} />
      </Routes>
    </Router>
  );
}

export default App;
