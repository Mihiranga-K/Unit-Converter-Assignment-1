const unitData = {
    length: { m: 1, km: 0.001, cm: 100, inch: 39.37, ft: 3.28 },
    weight: { kg: 1, g: 1000, lb: 2.20, oz: 35.27 },
    currency: { USD: 1, LKR: 305, EUR: 0.92, GBP: 0.79 },
    temp: { C: 'c', F: 'f', K: 'k' }
};

let currentCategory = 'length';

function switchCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.toLowerCase().includes(cat.substring(0,3)));
    });
    populateUnits();
}

function populateUnits() {
    const fromS = document.getElementById('fromUnit');
    const toS = document.getElementById('toUnit');
    fromS.innerHTML = ''; toS.innerHTML = '';

    Object.keys(unitData[currentCategory]).forEach(u => {
        fromS.innerHTML += `<option value="${u}">${u.toUpperCase()}</option>`;
        toS.innerHTML += `<option value="${u}">${u.toUpperCase()}</option>`;
    });
    if(toS.options.length > 1) toS.selectedIndex = 1;
    performConversion();
}

function performConversion() {
    const val = parseFloat(document.getElementById('inputValue').value);
    const from = document.getElementById('fromUnit').value;
    const to = document.getElementById('toUnit').value;
    const resField = document.getElementById('resultValue');

    if (isNaN(val)) { resField.value = ""; return; }

    let result;
    if (currentCategory === 'temp') {
        result = convertTemperature(val, from, to);
    } else {
        result = (val / unitData[currentCategory][from]) * unitData[currentCategory][to];
    }

    const finalResult = result.toFixed(2);
    resField.value = finalResult;
    addHistory(`${val} ${from.toUpperCase()} ➔ ${finalResult} ${to.toUpperCase()}`);
}

function convertTemperature(v, f, t) {
    let c;
    if (f === 'C') c = v;
    else if (f === 'F') c = (v - 32) * 5/9;
    else c = v - 273.15;

    if (t === 'C') return c;
    if (t === 'F') return (c * 9/5) + 32;
    return c + 273.15;
}

function addHistory(msg) {
    const list = document.getElementById('historyList');
    if(list.querySelector('.empty-state')) list.innerHTML = '';
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerText = msg;
    list.prepend(div);
    if(list.children.length > 3) list.lastChild.remove();
}

window.onload = () => switchCategory('length');