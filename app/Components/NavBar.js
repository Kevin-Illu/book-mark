import { html_navbar } from './../layouts.js';
import TrafficLight from './TrafficLights.js';

//TODO: create the trafic lights and add functionality
class NavBar {
  constructor(parent) {
    this._parent = parent;
    this._layout = html_navbar;
    //icon app
    this.icon = `<img class="icon" src="./public/img/bookmark.svg" alt="icon">`;
    //title fo current screen
    this.title_current;
    //trafic lights buttons
    this._btn_minimize = new TrafficLight('#traffic-lights','minimize');
    this._btn_minimize.actionName = 'minimize';
    this._btn_minimize.icon = `<img src="./public/img/minimize.svg" alt="button close">`;

    this._btn_maximize = new TrafficLight('#traffic-lights','maximize')
    this._btn_maximize.actionName = 'maximize';
    this._btn_maximize.icon = `<img src="./public/img/maximize.svg" alt="button close">`;

    this._btn_close = new TrafficLight('#traffic-lights','close')
    this._btn_close.actionName = 'close';
    this._btn_close.icon = `<img src="./public/img/close.svg" alt="button close">`;
  }

  render = () => {
    this.parent_html = document.querySelector(this._parent);
    this.parent_html.innerHTML = this._layout;
    //TODO: complete the commented parts
    // title app
    const iconApp = document.querySelector('#icon-app')
    iconApp.innerHTML = this.icon;

    // title current app
    this.setCurrent('hola');
    // traffic-lights
    this._btn_minimize.render();
    this._btn_maximize.render();
    this._btn_close.render();
  }

  //TODO: i need to implement this UnU
  setCurrent = (current) => {
    // console.log(current);
  }
}

export default NavBar;
