let readMoreLink = document.querySelectorAll(".readmore");
let moreText = document.querySelectorAll(".more");

for (let i = 0; i < moreText.length; i++) {
    moreText[i].style.display = "none";

    readMoreLink[i].addEventListener('click', (e) => { readMore(i) });
}

let readMore = (i) => {
    if (moreText[i].style.display === "none") {
        readMoreLink[i].style.display = "none";
        moreText[i].style.display = "inline";
    }
}
