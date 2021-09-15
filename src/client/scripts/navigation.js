var visited = sessionStorage.getItem('visited');
    if (!visited) {
        document.getElementById("success").style.visibility = "visible";
        setTimeout(function(){
            document.getElementById('success').style.display = 'none';
        }, 4000);
        sessionStorage.setItem('visited', true);
    }

setTimeout(function(){
    document.getElementById('failure').style.display = 'none';
}, 4000);