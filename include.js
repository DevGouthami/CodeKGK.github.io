document.addEventListener("DOMContentLoaded", function () {
    // Fetch the header.html file
    fetch("1/header.html")
        .then(response => response.text())
        .then(data => {
            // Insert the header content into the header element in index.html
            document.getElementById("header").innerHTML = data;
        });
});


document.addEventListener("DOMContentLoaded", function () {
    // Fetch the footer.html file
    fetch("1/footer.html")
        .then(response => response.text())
        .then(data => {
            // Insert the footer content into the footer element in index.html
            document.getElementById("footer").innerHTML = data;
        });
});


document.addEventListener("DOMContentLoaded", function () {
    // Fetch the section.html file
    fetch("1/section.html")
        .then(response => response.text())
        .then(data => {
            // Insert the footer content into the footer element in index.html
            document.getElementById("section").innerHTML = data;
        });
});
