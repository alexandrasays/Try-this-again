from flask import Flask, render_template, jsonify, request
import requests

app = Flask(__name__)
ALPHA_VANTAGE_API_KEY = '3KJM1GHU8VUCMNSW'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_stock_data')
def get_stock_data():
    symbol = request.args.get('symbol', 'IBM')
    url = f'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={symbol}&apikey={ALPHA_VANTAGE_API_KEY}'
    response = requests.get(url)
    data = response.json()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
