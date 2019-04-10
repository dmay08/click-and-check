import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: '',
      randomColor: '',
      message: '',
      gameOver: false
    }
    this.red = React.createRef()
    this.green = React.createRef()
    this.blue = React.createRef()
    this.yellow = React.createRef()
    this.pink = React.createRef()
    this.purple = React.createRef()
    this.grey = React.createRef()
    this.turquoise = React.createRef()
    this.orange = React.createRef()
  }

  componentDidMount() {
    this.generateColor();  
  }
  
  generateColor () {
    const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'grey', 'turquoise', 'orange']
    const randomColor = colors[Math.floor(Math.random() * colors.length)] 
    this.setState(() => ({ randomColor }))
  }

  async handleClick(val) { // add 'async await' b/c 'this.checkColor()' will run b4 state is set (setState is delayed)
    await this.setState(() => ({ selected: this[val].current.id })) 
    this.checkColor()
  }
  
  checkColor() {
    let message = ''
    let game = false
    if (this.state.randomColor === this.state.selected) {
      message = 'Well done!'
      game = true
    } else if (this.state.randomColor !== this.state.selected) {
      message = 'Wrong square, loser!'
    } 
    this.setState({message, gameOver: game})
    if (this.state.gameOver) {
      this.generateColor()
    }
  }
  
  render() {
    // console.log(this.state)

    return (
      <div className="App">
        <div className="row">
          <div className="square" ref={this.red} id="red" onClick={() => this.handleClick('red')}></div>
          <div className="square" ref={this.green} id="green" onClick={() => this.handleClick('green')}></div>
          <div className="square" ref={this.blue} id="blue" onClick={() => this.handleClick('blue')}></div>
        </div>
        <div className="row">
          <div className="square" ref={this.yellow} id="yellow" onClick={() => this.handleClick('yellow')}></div>
          <div className="square" ref={this.pink} id="pink" onClick={() => this.handleClick('pink')}></div>
          <div className="square" ref={this.purple} id="purple" onClick={() => this.handleClick('purple')}></div>
        </div>
        <div className="row">
          <div className="square" ref={this.grey} id="grey" onClick={() => this.handleClick('grey')}></div>
          <div className="square" ref={this.turquoise} id="turquoise" onClick={() => this.handleClick('turquoise')}></div>
          <div className="square" ref={this.orange} id="orange" onClick={() => this.handleClick('orange')}></div>
        </div>
        <p>Click the {this.state.randomColor} square</p>
        <p className={`${this.state.gameOver}`}>{this.state.message}</p>
        
      </div>
    );
  }
}

export default App;
