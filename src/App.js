import React, { Component } from 'react';
import './App.css';
import Ashabi from './Ashabi/Ashabi'


class App extends Component { 
  state= {
    awonAshabi: [
       { name: 'Taye', age: 21 },
       { name: 'Leye', age: 20 },
       { name: 'Bayo', age: 19 }
    ],
    otherState: 'some other value',
    showAwonAshabi: false,
  };
  
  switchNameHandler = (newName) => {
    //console.log('was clicked');
    // DON'T DO THIS!: this.state.awonAshabi[0].name='Queen T';
    this.setState({
      awonAshabi: [
        { name: newName, age: 21 },
        { name: 'Leye', age: 20 },
        { name: 'Bayo', age: 28 }
      ]

    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      awonAshabi: [
        { name: 'Taye', age: 21 },
        { name: event.target.value, age: 20 },
        { name: 'Bayo', age: 28 }
      ]

    })
  }
  
  toggleAshabiHandler= () => {
    const doesShow = this.state.showAwonAshabi;
    this.setState({showAwonAshabi: !doesShow});

  }

  render() {
    const inputStyle = {
       backgroundColor: 'white',
       font:'inherit',
       border: '1px solid blue',
       padding: '8px',
       cursor: 'pointer'
    };

  return ( 
    <div className="App"> <p> Listen up</p> 
        <h1> Hey guys </h1>
       <button 
       style={inputStyle}
       //onClick={this.switchNameHandler.bind(this, 'Leye')}>Switch name</button>
       onClick={this.toggleAshabiHandler}>Switch name</button>
       { 
        this.state.showAwonAshabi ?
            <div>
              <Ashabi 
                  name={this.state.awonAshabi[0].name} 
                  age={this.state.awonAshabi[0].age}/>
              <Ashabi 
                  name={this.state.awonAshabi[1].name} 
                  age={this.state.awonAshabi[1].age}/> 
              <Ashabi 
                  name={this.state.awonAshabi[2].name} 
                  age={this.state.awonAshabi[2].age}
                  click={this.switchNameHandler.bind(this, 'Oxygene')}
                  changed={this.nameChangedHandler} 
                  currentName={this.state.awonAshabi} >Additional info</Ashabi>
           </div>  : null
       }   
   </div>
      
    
  );
  //return React.createElement('div', {className:'App'}, React.createElement ('h1', null, 'Hi, I\'m Leye') );
 } 
}
export default App; 








/*

import React, { useState } from 'react';
import './App.css';
import Ashabi from './Ashabi/Ashabi'


const App = (props) => { 
  const [ ashabiState, setAshabiState ] = useState({
    awonAshabi: [
       { name: 'Taye', age: 21 },
       { name: 'Leye', age: 20 },
       { name: 'Bayo', age: 19 }
    ],

  });
 
 const [otherState, setOtherState] = useState({otherState: 'some other value'});
 
 console.log (ashabiState, otherState);

  const switchNameHandler = () => {
    //console.log('was clicked');
    // DON'T DO THIS!: this.state.awonAshabi[0].name='Queen T';
    setAshabiState({
      awonAshabi: [
        { name: 'Queen T', age: 21 },
        { name: 'Leye', age: 20 },
        { name: 'Bayo', age: 28 }
      ]

    });
  };

  return ( 
    <div className="App"> <p> Listen up</p> 
    <h1> Hey guys </h1>
    <button onClick={switchNameHandler}>Switch name</button>
    <Ashabi name={ashabiState.awonAshabi[0].name} age={ashabiState.awonAshabi[0].age}/>
    <Ashabi name={ashabiState.awonAshabi[1].name} age={ashabiState.awonAshabi[1].age}/> 
    <Ashabi name={ashabiState.awonAshabi[2].name} age={ashabiState.awonAshabi[2].age}>Additional info</Ashabi>

    </div>
    
  );
  //return React.createElement('div', {className:'App'}, React.createElement ('h1', null, 'Hi, I\'m Leye') );
} 

export default App; 

*/

