import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import json

file_path = 'data.json'

# Open the JSON file and parse it
with open(file_path, 'r') as file:
    data = json.load(file)

cred = credentials.Certificate('akspi-fine-site-realtime-db-secret-key.json')


firebase_admin.initialize_app(cred, {
    'databaseURL' : 'https://akspi-fine-site-default-rtdb.firebaseio.com/'

})


users_ref = db.reference('users/')

users_ref.update(data)
