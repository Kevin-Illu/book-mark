class Header {
  constructor(idParent) {
    this.id = idParent;
    this.navBar = document.createElement('div');
  }
};

class trafficLigth {
  constructor() {
    this.actions = {
      close: win.api.trafficsLightsAction('close'),
      minimize: win.api.trafficsLightsAction('minimize'),
      maximize: win.api.trafficsLightsAction('maximize'),
      resize: win.api.trafficsLightsAction('unmaximize')
    };
  };

  event(action) {
    this.actions[action]();
  }
}

export default Header;
