// Navbar hide/show on scroll
let prevScrollpos = window.scrollY
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("main-nav").style.top = 0
    } else {
        document.getElementById("main-nav").style.top = "-100px"
    }
    prevScrollpos = currentScrollPos
}

// Delete article confirm
function deleteArticleConfirm(event) {
    if (!confirm("Are you sure you want to delete this article?"))
        event.preventDefault()
}
