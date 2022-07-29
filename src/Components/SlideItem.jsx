import React from 'react';
import styles from './SlideItem.css'


const SlideItem = (props) => {
  return (
        <section className='wrapper'>
            <div className='head_container'>
                <span>{props.post.icon}</span>
                <h2>{props.post.title}</h2>
            </div>
            <h3 className='text'>{props.post.text}</h3>
        </section>
  )
}
export default SlideItem
