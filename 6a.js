function convert (){
    let res = 0;
    let output = window.document.getElementById('display');
    let value = window.document.getElementById('input').value;
    if (window.document.getElementById('celsius').checked) {
    res = (value*1.8) +32;
    } else if (window.document.getElementById('fahrenheit').checked) {
      res = (value-32)/1.8; 
    }
    output.textContent = res; 
}