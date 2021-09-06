setTimeout(function(){
    document.getElementById('success').style.display = 'none';
}, 4000);

(function() {
    var visited = localStorage.getItem('visited');
    if (!visited) {
        document.getElementById("success").style.visibility = "visible";
        localStorage.setItem('visited', true);
    }
})();

setTimeout(function(){
    document.getElementById('failure').style.display = 'none';
}, 4000);