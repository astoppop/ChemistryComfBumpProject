const xhr = new XMLHttpRequest();
xhr.open("GET", 'https://cors-proxy.htmldriven.com/?url=https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/2244', true);
xhr.setRequestHeader("Accepted", "chemical/x-mdl-sdfile");
xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhr.setRequestHeader("Content-Type", "chemical/x-mdl-sdfile");
xhr.onreadystatechange = () => { // Call a function when the state changes.
    console.log(1);
}
xhr.send(null);