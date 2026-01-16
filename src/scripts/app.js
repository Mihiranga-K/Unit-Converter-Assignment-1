
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

    const liveSection = document.getElementById('liveRatesSection');
    if(liveSection) liveSection.style.display = 'none';

    populateUnits();
}

function populateUnits() {
    const fromS = document.getElementById('fromUnit');
    const toS = document.getElementById('toUnit');
    if(!fromS || !toS) return;

    fromS.innerHTML = ''; 
    toS.innerHTML = '';

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


async function showLiveRates() {
    const liveRatesSection = document.getElementById('liveRatesSection');
    const display = document.getElementById('ratesDisplay');
    
    if(liveRatesSection) liveRatesSection.style.display = 'block';
    if(display) display.innerHTML = '<p>Fetching market data...</p>';

    try {
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await response.json();

        if (data.result === "success") {
            const rates = data.rates;
            const selectedCurrencies = ['LKR', 'EUR', 'GBP', 'INR', 'AUD'];
            
            let html = '<div class="rates-container">';
            selectedCurrencies.forEach(cur => {
                html += `
                    <div class="history-item" style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span>1 USD = <b>${rates[cur].toFixed(2)}</b></span>
                        <span style="color: #38bdf8;">${cur}</span>
                    </div>`;
            });
            html += '</div>';
            display.innerHTML = html;
        }
    } catch (error) {
        display.innerHTML = '<p style="color: #ef4444;">Connection Error!</p>';
    }
}

window.onload = () => switchCategory('length');