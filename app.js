const searchBook = () => {
    /* ----Getting the search text---- */
    const searchArea = document.getElementById("search-area");
    const searchText = searchArea.value;
    searchArea.value = "";
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    /* ----fetching the url---- */
    fetch(url)
        .then(res => res.json())
        .then(data => displayResults(data.docs))
}

const displayResults = books => {
    const resultContainer = document.getElementById("result-container");
    books.forEach(book => {
        console.log(book);
        const div = document.createElement("div");
        div.classList.add("col-md-4");
        div.innerHTML = `
        <div class="card m-1 h-75 w-75">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg"
            class="card-img-top h-50" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
                <small class="text-secondary">Last Publish: 2021</small>
            </div>
        </div>
        `
        resultContainer.appendChild(div);
    });
}