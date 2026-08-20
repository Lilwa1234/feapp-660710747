import Greeting from './Components/Greeting';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MovieList from './Components/MovieList';
import React from 'react';
import Card from './Components/Card';
import ProfileCard from './Components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'นายมังดี้ ดี ลูฟี่', nickname: 'ลูฟี่',
    major: 'ราชาโจรสลัด', favorites: ['เนื้อ', 'เนื้อเหมือนกันแต่อีกบรรทัดนึง'] },
{ id: 1, name: 'อุซึมากิ นารูโตะ', nickname: 'นารูโตะ',
    major: 'โฮคาเงะ', favorites: ['ราเมน', 'ไอติม'] },
{ id: 1, name: 'ซงจินอู', nickname: 'ซง',
    major: 'ฮันเตอร์แรงค์ S', favorites: ['วิ่ง', 'เดิน'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;