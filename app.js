const searchBook = () => {
    /* ----Getting the search text---- */
    const searchArea = document.getElementById("search-area");
    const searchText = searchArea.value;
    searchArea.value = "";
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = ``;

    /* ----fetching the url---- */
    fetch(url)
        .then(res => res.json())
        .then(data => displayResults(data.docs, data.numFound));

    /* Total result clearing */
    const totalResult = document.getElementById("total-result");
    totalResult.innerText = ``;

}


const displayResults = (books, total) => {
    // ------------total result-----------------
    if (total == "0") {
        const totalResult = document.getElementById("total-result");
        totalResult.innerText = `No result found`;
    }
    else {
        const totalResult = document.getElementById("total-result");
        totalResult.innerText = `Total Result: ${total}`;
    }
    //---------------books---------------------
    const resultContainer = document.getElementById("result-container");
    books.forEach(book => {
        const div = document.createElement("div");
        div.classList.add("col-md-4");

        div.innerHTML = `
        <div class="card h-100 w-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg"
            class="card-img-top h-50" alt="...">
            <div class="card-body h-25">

                <h5 class="card-title">
                ${book.title}
                </h5>
                <p class="card-text">
                Author: ${book.author_name[0]}</p>
                <p>Publisher: ${book.publisher[0]}</p>
                
            </div>
            <div class="card-footer">
                    <small class="text-muted">First Publish: ${book.first_publish_year}</small>
            </div>
        </div>
        `
        resultContainer.appendChild(div);
    });
}

