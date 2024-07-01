function fetchStockData() {
    const symbol = document.getElementById('symbol').value;
    fetch(`/get_stock_data?symbol=${symbol}`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('stockTable').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = ''; // Clear existing data
            const timeSeries = data['Time Series (Daily)'];
            for (const date in timeSeries) {
                const row = tableBody.insertRow();
                row.insertCell(0).innerText = date;
                row.insertCell(1).innerText = timeSeries[date]['1. open'];
                row.insertCell(2).innerText = timeSeries[date]['2. high'];
                row.insertCell(3).innerText = timeSeries[date]['3. low'];
                row.insertCell(4).innerText = timeSeries[date]['4. close'];
                row.insertCell(5).innerText = timeSeries[date]['5. volume'];
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}
