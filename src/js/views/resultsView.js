import View from './View.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'We could not find that recipe. Please try another one!';
  _successMessage = '';

  _generateMarkup() {
    return this._data
      .map(d =>
        this._generateMarkupPreview(d.id, d.image, d.title, d.publisher)
      )
      .join('');
  }

  _generateMarkupPreview(id, img, title, publisher) {
    const wId = window.location.hash.slice(1);
    return `
      <li class="preview">
        <a class="preview__link ${
          id === wId ? 'preview__link--active' : ''
        }" href="#${id}"> 
          <figure class="preview__fig">
            <img src="${img}" alt="${title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${title}</h4>
            <p class="preview__publisher">${publisher}</p>
          </div>
        </a>
      </li>
    `;
  }
}

export default new ResultsView();
