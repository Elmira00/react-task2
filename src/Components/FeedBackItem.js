import React, { Component } from 'react'

export default class FeedBackItem extends Component {
  render() {
    return (
        <section style={{border:"1px white solid",color:"white",margin:"10px",fontSize:"1em"}}>
            <p>{this.props.feedback}</p>
        </section>
    )
  }
}
