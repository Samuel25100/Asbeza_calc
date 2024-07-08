#!/usr/bin/python3
"""Load the mysql data to json file"""
import mysql.connector
import json

data = mysql.connector.connect(
        host='localhost',
        user='asebezcal',
        password='asebezcalPWD',
        database='AsbezaCalcDB'
)

def load_on_file():
    """Load the data from mysql to json file"""
    dc = data.cursor()
    fileName = 'file1.json'
    obj = [{'name': 'grocery', 'value':[]},
           {'name': 'houses', 'value':[]},
           {'name': 'vehicles', 'value':[]},
           {'name': 'hotels', 'value':[]},
           {'name': 'tools', 'value':[]}]
    for val in range(0, 5):
        dc.execute('SELECT * FROM {}'.format(obj[val]['name']))
        result = dc.fetchall()
        for i in result:
            obj[val]['value'].append(parser(i, obj[val]['name']))
    with open(fileName, 'w') as file:
        json.dump(obj, file, indent=1)
            

    dc.close()
    data.close()

def parser(value, name):
    """Split the given data and return it as dictionary"""
    result = {'grocery': {'name':'', 'price': '', 'size':'', 'imageid':''},
              'houses': {'name':'', 'type':'', 'size':'', 'price': '', 'imageid':''},
              'vehicles': {'name':'', 'type':'', 'price': '', 'imageid':''},
              'hotels': {'name':'', 'size':'', 'price': '', 'imageid':''},
              'tools': {'name':'', 'type':'', 'price': '', 'imageid':''}}
    if (name == 'grocery'):
        result['grocery']['name'] = value[0]
        result['grocery']['price'] = value[1]
        result['grocery']['size'] = value[2]
        result['grocery']['imageid'] = value[3]
    elif (name == 'houses'):
        result['houses']['name'] = value[0]
        result['houses']['type'] = value[1]
        result['houses']['size'] = value[2]
        result['houses']['price'] = value[3]
        result['houses']['imageid'] = value[4]
    elif (name == 'vehicles'):
        result['vehicles']['name'] = value[0]
        result['vehicles']['type'] = value[1]
        result['vehicles']['price'] = value[2]
        result['vehicles']['imageid'] = value[3]
    elif (name == 'tools'):
        result['tools']['name'] = value[0]
        result['tools']['type'] = value[1]
        result['tools']['price'] = value[2]
        result['tools']['imageid'] = value[3]
    else:
        result['hotels']['name'] = value[0]
        result['hotels']['size'] = value[1]
        result['hotels']['price'] = value[2]
        result['hotels']['imageid'] = value[3]
    return(result[f'{name}'])




if __name__ == "__main__":
    load_on_file()
