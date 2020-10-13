import React from 'react';
import PropTypes from 'prop-types';
import { waitForElementToBeRemoved } from '@testing-library/react';

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
    "https://www.bobaekimchi.com/shopimages/dudwn0405/002001000001.jpg?1523348965",
    rating: 5
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
    "https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/20170910011347_photo1_481363df942d.jpg",
    rating: 4.9
  },
  {
    id:3,
    name: "Bibimbap",
    image:
    "https://recipe1.ezmember.co.kr/cache/recipe/2018/10/03/355b5cd5c3beb1a775c82ee425dcd1931.jpg",
    rating: 3.9
  },
  {
    id:4,
    name: "Doncasu",
    image:
    "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/guest/image/Q0dyDptUpmvOg_kSyYy0k66j6gY.PNG",
    rating: 4
  },
  {
    id:5,
    name: "Kimbap",
    image:
    "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
    rating: 4.2
  }
];

function Food({name, picture, rating}){
  return <div>
    <h1>I Like {name}</h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
  <div>
    {foodILike.map(dish => (
    <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />  
    ))}
  </div>
  );
}

export default App;
