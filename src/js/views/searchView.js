class SearchView {
  #parentElement = document.querySelector('.search');
  #searchField = this.#parentElement.querySelector('.search__field');

  getQuery() {
    const query = this.#searchField.value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this.#searchField.value = '';
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
