import RibsCore from 'ribs-core';

class RibsPopup {
  /**
   * constructor add event listener on all element wich have
   * data-ribspopup
   */
  constructor() {
    const links = document.querySelectorAll('[data-ribspopup]');

    Array.from(links).forEach((element) => {
      element.addEventListener('click', (event) => this.openPopup(event));
    })
  }

  /**
   * @param event
   * method to open a popup with link clicked in event
   */
  openPopup(event) {
    event.preventDefault();

    const dataPopup = event.currentTarget.dataset.popup;
    const popup = document.getElementById(dataPopup);

    popup.classList.add('displayed');

    popup.querySelector('.link .cancel').addEventListener('click', (event) => this.closePopup(event));
  }

  /**
   * @param event
   * method to close a popup
   */
  closePopup(event) {
    event.preventDefault();

    const popup = RibsCore.parents(event.currentTarget, '.popup');

    if (popup !== null) {
      popup.classList.remove('displayed');
    }
  }
}

export default (RibsPopup);

const popup = new RibsPopup();