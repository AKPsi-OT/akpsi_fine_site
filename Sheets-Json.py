import gspread
import json 

file_path = "./client_secret_key.json"
gc = gspread.service_account(filename=file_path)


spreadsheet = gc.open('Attendance Sheet Fall 2023')
sheetNames = ["Fines","Brotherhood Meetings","Checkpoints","Rituals","Requirement Fines","Fine Reduction Amount"]




dicData = {}

contactSheet = spreadsheet.worksheet("Master Contact Sheet").get_all_values()
contactDic ={} # dictionary -> name: email 

for row in contactSheet[1:]:
    contactDic[row[0]] = row[1]
    dicData[row[1]] = {"name": row[0]}
print(dicData)

# email -> {name:,fines : {  final fine: , fine before reduction: },,}
for sheetName in sheetNames:
    sheet = spreadsheet.worksheet(sheetName).get_all_values() # gets all values in list form of the sheet

    columnNames = sheet[0]
    for row in sheet[1:]: # iterate through the rows of a sheet
        name = row[0]
        if name not in contactDic:
            continue
        email = contactDic[name] # identify the email
        dicData[email][sheetName] = {} # use the email, sheetname to create dic
        curDic = dicData[email][sheetName] 
        for i in range(1,len(columnNames)): # iterate through each column
            curDic[columnNames[i]] = row[i] # push to the dictionary object with the column name






for email in dicData:
    

json_string = json.dumps(dicData, indent=4)

with open('data.json', 'w') as file:
    file.write(json_string)
        




