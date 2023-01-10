const button = document.getElementById("bt");
const title = document.getElementById("title");
button && button.addEventListener("click", e => {
    if (title.value.trim() === "") {
        e.preventDefault();
        title.focus();
    }
});