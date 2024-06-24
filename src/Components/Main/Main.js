import React, { Component } from 'react'
import './Main.css'
import MainItem from '../MainItem';

const movies=[
    {
        name:"Pulp Fiction",
        genre:"Dram",
        director:"Quentin Tarantino",
        imgPath:"https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
        description:"Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of crime in Los Angeles, California."
    },
    {
        name:"Dune 2",
        genre:"Sci-fi",
        director:"Aaron E. Powell",
        imgPath:"https://upload.wikimedia.org/wikipedia/en/7/78/Dune2_BOD.jpg",
        description:"1992 real-time strategy game developed by Westwood Studios and published by Virgin Games. It serves as the sequel to Dune, following a more traditional adventure strategy game format, that came out earlier the same year."
    },
    {
        name:"Logan",
        genre:"Fantasy/Action",
        director:"James Mangold",
        imgPath:"https://upload.wikimedia.org/wikipedia/en/3/37/Logan_2017_poster.jpg",
        description:"Logan is a 2017 American superhero film starring Hugh Jackman as the titular character. It is the tenth film in the X-Men film series and the third and final installment in the Wolverine trilogy, following X-Men Origins: Wolverine (2009) and The Wolverine (2013)."
    },
    {
        name:"The Terminal",
        genre:"Real Person Fiction",
        director:"Steven Spielberg",
        imgPath:"https://avatars.mds.yandex.net/i?id=bcfa0d21504846babd14b9853ab3bf7f51ded09a-12422010-images-thumbs&n=13",
        description:"The Terminal is a 2004 American comedy-drama film produced and directed by Steven Spielberg and starring Tom Hanks, Catherine Zeta-Jones, and Stanley Tucci."
    }
];
export default class Main extends Component {

  render() {
    return (
      <div id='mainDiv'>
        {
            movies.map((m)=>(<MainItem movie={m}/>))
        }
      </div>
    )
  }
}
