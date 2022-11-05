class TrafficLight {
  constructor(parent, id) {
    this._parent = parent;
    this._id = id;
    this._btn = document.createElement('button');
    this._btn.setAttribute('id', id);
    this._btn.onclick = this.onPress;

    this.actionName;
    this.icon;
  }

  onPress = () => window.api.trafficLights(this.actionName);

  render = () => {
    const container = document.querySelector(this._parent);
    this._btn.innerHTML = this.icon;
    container.appendChild(this._btn);
  }
}

export default TrafficLight;
