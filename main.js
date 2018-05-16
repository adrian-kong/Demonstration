//Copyed this from stackoverflow - not mine
function readTextFile(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function (){
            if(rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status == 0)){
                document.getElementById("readme").innerHTML = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
}

readTextFile('README.md');
