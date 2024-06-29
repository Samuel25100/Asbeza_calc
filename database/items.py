from flask import Flask, jsonify
from flask_cors import CORS
import os
import json

app = Flask(__name__)
CORS(app, resources={r"/api/cal/*":{"origins":"*", "methods":["GET"]}})

@app.route('/api/cal/grocery', strict_slashes=False)
def fetch_grocery():
    file_pth = 'database/file.json'
    with open(file_pth, 'r') as file:
        f = json.load(file)
        for i in range(len(f)): 
            if (f[i]['name'] == "grocery"):
                grocery = f[i]['value']
        return jsonify(grocery)

@app.route('/api/cal/houses', strict_slashes=False)
def fetch_houses():
    file_pth = 'database/file.json'
    with open(file_pth, 'r') as file:
        f = json.load(file)
        for i in range(len(f)):
            if (f[i]['name'] == "houses"):
                houses = f[i]['value']
        return jsonify(houses)

@app.route('/api/cal/vehicles', strict_slashes=False)
def fetch_vehicles():
    file_pth = 'database/file.json'
    with open(file_pth, 'r') as file:
        f = json.load(file)
        for i in range(len(f)):
            if (f[i]['name'] == "vehicles"):
                vehicles = f[i]['value']
        return jsonify(vehicles)

@app.route('/api/cal/hotels', strict_slashes=False)
def fetch_hotels():
    file_pth = 'database/file.json'
    with open(file_pth, 'r') as file:
        f = json.load(file)
        for i in range(len(f)):
            if (f[i]['name'] == "hotels"):
                hotels = f[i]['value']
        return jsonify(hotels)

@app.route('/api/cal/tools', strict_slashes=False)
def fetch_tools():
    file_pth = 'database/file.json'
    with open(file_pth, 'r') as file:
        f = json.load(file)
        for i in range(len(f)):
            if (f[i]['name'] == "tools"):
                tools = f[i]['value']
        return jsonify(tools)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000')
