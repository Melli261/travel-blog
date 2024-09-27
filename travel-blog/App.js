function scrollLeft(id) {
    var gallery = document.getElementById(id);
    gallery.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight(id) {
    var gallery = document.getElementById(id);
    gallery.scrollBy({ left: 300, behavior: 'smooth' });
}