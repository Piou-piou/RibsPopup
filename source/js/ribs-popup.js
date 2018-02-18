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

    const link = event.currentTarget;
    const dataPopup = event.currentTarget.dataset.popup;
    const popup = document.getElementById(dataPopup);

    popup.classList.add('displayed');

    popup.querySelector('.link .cancel').addEventListener('click', (event) => this.closePopup(event));
    popup.querySelector('.link .validate').addEventListener('click', (event) => this.setActionValidate(event, link));
  }

  setActionValidate(event, link) {
    /*event.preventDefault();*/

    const popup = RibsCore.parents(event.currentTarget, '.popup');

    if (link.dataset.href !== null && link.dataset.href !== undefined) {
      event.currentTarget.href = link.dataset.href;
    } else if (link.dataset.form !== null && link.dataset.form !== undefined) {
      /*document.getElementById(link.dataset.form).*/
    }
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