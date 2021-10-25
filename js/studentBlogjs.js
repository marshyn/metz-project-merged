function showSubmission() {
    var elm = document.getElementsByClassName("popup");
    window.scrollTo(0, 0);
    window.addEventListener('scroll', noScroll);
    elm[0].style.display = "block";
}

function closeSubmission() {
    var elm = document.getElementsByClassName("popup");
    window.removeEventListener('scroll', noScroll);
    elm[0].style.display = "none";
}

function showPost() {
    var elm = document.getElementsByClassName("post");
    window.scrollTo(0, 0);
    window.addEventListener('scroll', noScroll);
    elm[0].style.display = "block";
}

function closePost() {
    var elm = document.getElementsByClassName("post");
    window.removeEventListener('scroll', noScroll);
    elm[0].style.display = "none";
}

function noScroll() {
  window.scrollTo(0, 0);
}