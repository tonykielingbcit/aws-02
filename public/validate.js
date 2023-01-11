let count = 0;
const button = document.getElementById("create-bt");
const title = document.getElementById("title");
button && button.addEventListener("click", e => {
    if (title.value.trim() === "") {
        e.preventDefault();
        title.focus();
        title.style.backgroundColor = "lightcoral";
        title.placeholder = "Please, a title.";
        count++;
        if (count > 2 && count < 6)
            title.placeholder = "Please, a title. Come on!";
        if (count > 5)
            title.placeholder = "Sorry, a title.";
    }
});