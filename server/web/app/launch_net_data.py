import urllib.request
from db import Database
import json

class LaunchNetData:
    def __init__(self):
        self.db = Database()

    def fetchFromServer(self):
        set_size = 10
        page = 1
        # get the first page
        data = json.loads(urllib.request.urlopen("https://launchlibrary.net/1.4/launch/next/{}".format(set_size)).read())
        self.db.set("launch_data_page_{}".format(page), json.dumps(data['launches']))
        self.db.set("total_launch_records", data['total'])

        # get the number of remaining records
        remaining = data['total'] - set_size

        # if we have more records to retrive
        if remaining > 0:
            data = json.loads(urllib.request.urlopen("https://launchlibrary.net/1.4/launch/next/{}?offset={}".format(remaining, set_size)).read())

            launch_pages = list(self.divide_chunks(data['launches'], set_size))

            for val in launch_pages:
                page += 1
                self.db.set("launch_data_page_{}".format(page), json.dumps(val))

    def divide_chunks(self, l, n): 
        # looping till length l 
        for i in range(0, len(l), n):  
            yield l[i:i + n] 