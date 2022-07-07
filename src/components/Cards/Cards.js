import React from 'react'
import Card from './Card'
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/image3.jpg"


const cards = [
{
  id: 1,
  title: 'carro 1',
  // text: 'caro numero 1',
  image: image1,
  url: "https://www.facebook.com/watch/?ref=tab"
},

{
  id: 2,
  title: 'carro 2',
  image: image2,
  url: "https://www.facebook.com/watch/?ref=tab"
},

{
  id: 3,
  title: 'carro 3',
  image: image3 ,
  url: "https://www.facebook.com/watch/?ref=tab"
}

]

function Cards() {
  return (
    <div className="media">
        <div className="row">
            { 
            cards.map(card => (
            <div className="col-md-4 " key={card.id}>
            <Card title={card.title} imageSource={card.image} url={card.url} text= {card.text}/>
            </div>
            ))  
          }
        </div>    
    </div>
  )
}

export default Cards