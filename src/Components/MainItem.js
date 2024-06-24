import React, { Component } from 'react'

export default class MainItem extends Component {
  render() {
    return (
      <div style={{display:"inline-block",width:"270px",height:"250px",margin:"50px"}}>
        <img style={{width:"270px",height:"250px"}} src={this.props.movie.imgPath} alt='movie'></img>
    <section style={{backgroundColor:"#1f49a3",color:"white",display:"inline-block"}}>
        <h4>Name : {this.props.movie.name}</h4>
        <h4>Genre : {this.props.movie.genre}</h4>
        <h4>Director : {this.props.movie.director}</h4>
    </section>
      </div>
    )
  }
}
