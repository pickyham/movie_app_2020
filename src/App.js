import React from 'react';

function Food({name, picture}){
  return (
    <div>
      <h1>I like {name}</h1>
        <span>I say {picture}</span>
  </div>
  );
}

const foodILike = [
{id :1,
  name : 'kimchi', 
hi : "hello"},
{id :2,
  name : "samgyeobsal",
hi: "murago?"},
{id :3,
  name : "coffee",
hi : "beagopa"}
];



function App() {
return (
    <div>
      {/* 인터넷되면 확인 */}
      {/* console.log(foodILike.map(renderFood)); */}
      {foodILike.map(dish => <Food  key={dish.id} name={dish.name} picture={dish.hi} />)}
    </div>
  );
}

export default App;
