class Parent extends React.Component {
  constructor() {
    super();
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
    this.restart = this.restart.bind(this);
  }

  pause() {
    this.ref.tween.pause();
  }

  resume() {
    this.ref.tween.resume();
  }

  restart() {
    this.ref.tween.restart();
  }

  render() {
    return (
      <div>
        <Child ref={(c) => this.ref = c} />
        <button onClick={this.pause}>Pause</button>
        <button onClick={this.resume}>Resume</button>
        <button onClick={this.restart}>Restart</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentDidMount() {
    this.tween = TweenMax.fromTo(this.wrapper, 5, { x: 0 }, { x: 50 });
  }
  render() {
    return (
      <div style={{ position: 'absolute', top: 50, left: 0 }} ref={(n) => this.wrapper = n}>
        Animating
      </div>
    );
  }
}

ReactDOM.render(<Parent />, window.document.getElementById('container'));
