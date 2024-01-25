window.onload = () => {
    document.getElementById("reloadButton").addEventListener("click", () => {
        var images = document.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
            images[i].setAttribute('loading', 'eager');
        }
        location.reload(true);
    });
};