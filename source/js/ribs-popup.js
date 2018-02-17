import RibsCore from 'ribs-core';

class RibsPopup {
  /**
   * constructor add event listener on all element wich have
   * data-ribspopup
   */
  constructor() {
    const links = document.querySelectorAll('[data-ribspopup]');

    Array.from(links).forEach((element) => {
      element.addEventListener('click', (event) => {
        this.openPopup(event);
      });
    })
  }

  /**
   * @param event
   * method to open a popup with link clicked in event
   */
  openPopup(event) {
    event.preventDefault();

    const popup = event.currentTarget.dataset.popup;

    document.getElementById(popup).classList.add('displayed');
  }
}

export default (RibsPopup);

const popup = new RibsPopup();