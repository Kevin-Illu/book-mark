import { html_main } from './layouts.js';
import NavBar from './Components/NavBar.js';

class App {
  constructor() {
    this.parent = document.querySelector('#root');
    this.layout = html_main;
    this.navbar = new NavBar('#navbar');
  }

  render = () => {
    this.parent.innerHTML = this.layout;
  }

  run = () => {
    this.render();
    this.navbar.render();
  }
}


const app = new App();
app.run();
