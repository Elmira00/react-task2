import React, { Component } from 'react'
import FeedBackItem from '../FeedBackItem'


const feedbacks=[
    "I had an excellent experience at Cinemark!",
    "Cinemark provided a fantastic movie-going experience.",
    "The seats were comfortable.",
    "I was disappointed with my experience at Cinemark."
]

export default class Feedback extends Component {
  render() {
    return (
      <div style={{backgroundColor:"",display:"flex"}}>
         {feedbacks.map((f)=>(<FeedBackItem feedback={f}/>))}
      </div>
    )
  }
}
