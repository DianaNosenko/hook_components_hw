import './App.css';
import { useEffect, useState } from 'react';
import React from 'react'
import Header from './Components/Header';
import SlideItem from './Components/SlideItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield, faPeopleArrows, faPeopleGroup, faFileContract } from "@fortawesome/free-solid-svg-icons";
import Button from './Components/Button';

const icon1 = <FontAwesomeIcon icon={faUserShield} />;
const icon2 = <FontAwesomeIcon icon={faPeopleGroup} />;
const icon3 = <FontAwesomeIcon icon={faFileContract} />;
const icon4 = <FontAwesomeIcon icon={faPeopleArrows} />;
const db = [
  {
    id:1, 
    title: 'Consultant led', 
    text: 'Work one-on-one with a Squadhelp branding consultant.', 
    icon: icon1 },
  {
    id:2, 
    title: 'Crowd powered', 
    text: 'Work with our top rated Creatives and receive a huge breadth of ideas.', 
    icon: icon2},
  {
    id:3, 
    title: 'Trademark Reports', 
    text: 'Comprehensive trademark screening on your shortlisted names.', 
    icon: icon3},
  {
    id:4, 
    title: 'Audience testing', 
    text: 'Get rapid feedback from real people on your shortlist of business names.', 
    icon: icon4},
];
export default function App() {
  const [posts, setPosts] = useState(db)
  return (
    <main>
    <Header/>
    <div className='cards'>
      {posts.map(post=>
      <SlideItem post={post} key={post.id}/>
        )}
    </div>
    <Button/>
  </main>
  )
}

