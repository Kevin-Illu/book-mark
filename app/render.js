import Header from "./components/Header.js";

class MainApp {
  constructor() {
    this.root = document.querySelector('#root');
    this.layout = `
    <div id="container">
      <header id="Header">h</header>
      <main id="Main">m</main>
      <footer id="Footer">f</footer>
    </main>`;
    this.root.innerHTML = this.layout;

    this.header = new Header(root);
  }

  run() {
    console.log('runing');
  }
}


const main = new MainApp();
main.run();
