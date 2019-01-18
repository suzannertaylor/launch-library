# app.py
from flask import Flask
from flask_cors import CORS
from flask import jsonify
from flask import request
import json
from db import Database
from launch_net_data import LaunchNetData

db = Database()
lnd = LaunchNetData()

app = Flask(__name__)
CORS(app)

@app.route('/')
def get_launch_data():
    nextPage = request.args.get('nextPage') if request.args.get('nextPage') else 1
    # get the record from redis
    data = db.get("launch_data_page_{}".format(nextPage))
    total = db.get("total_launch_records")

    if data == None:
        print('no data found')
        # go fetch ithe launch data from the server
        lnd.fetchFromServer()
        data = db.get("launch_data_page_{}".format(nextPage))
    else:
        print('data found')

    if data == None:
        data = ''
        total = 0
    else:     
        total = db.get("total_launch_records")

    result = {'total': total, 'launches': json.loads(data)}
    return jsonify(result), 200


if __name__ == '__main__':
    app.run(host='0.0.0.0')