function convert() {
    const input = document.getElementById('inputValue').value;
    const result = input / 1000;
    document.getElementById('result').innerText = Result: ${result} km;
}