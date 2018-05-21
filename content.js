let searchInput = document.getElementById('inp').querySelector('input');
function submitSearch() { 
    document.getElementById('subm').querySelector('input').click(); 
}

function takeInput() {
    search = prompt("Enter your Search Query");
    if (search !== null) {
        searchInput.value = search;
        submitSearch();
    }
}
window.addEventListener ("load", takeInput, false);
