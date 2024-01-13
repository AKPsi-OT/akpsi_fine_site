import gspread
import json 

file_path = "./client_secret_key.json"
gc = gspread.service_account(filename=file_path)


spreadsheet = gc.open('Attendance Sheet Fall 2023')
sheetNames = ["Fines","Brotherhood Meetings","Checkpoints","Rituals","Requirement Fines","Fine Reduction Amount"]
eventSheetNames = {"Brotherhood Meetings","Checkpoints","Rituals"}
sheetNameToColumnNames = {
    "Fines": ["Final fine","Brotherhood","Rush","Checkpoint","Ritual","Requirement","Fine Reduction"],
    "Requirement Fines":["Total Points","Missing out of 9", "Missing out of 6"],
    "Requirement Calculations" : ["Cleaned Name","Professional","Brotherhood","DEI","Fundraising","Community Service"],
    "Fine Reduction Amount":["Credit Hours", "Fine Reduction"]
}



dicData = {}

contactSheet = spreadsheet.worksheet("Master Contact Sheet").get_all_values()
contactDic ={} # dictionary -> name: email 

for row in contactSheet[1:]:
    contactDic[row[0].lower()] = row[1]
    dicData[row[1]] = {"name": row[0].lower()}


# email -> {name:,fines : {  final fine: , fine before reduction: },,}
for sheetName in sheetNames:
    sheet = spreadsheet.worksheet(sheetName).get_all_values() # gets all values in list form of the sheet
    isEventSheet = sheetName in eventSheetNames # is an event sheet
    columnNames =sheet[0] # get the column names, or just all columns
    for row in sheet[1:]: # iterate through the rows of a sheet
        name = row[0].lower() # retrieve the name

        if name not in contactDic:
            continue

        email = contactDic[name] # identify the email
        dicData[email][sheetName] = {} # use the email, sheetname to create dic
        curDic = dicData[email][sheetName]  # set the current dictionary to the newly created dictionary


        if isEventSheet: # event sheet?
           curDic["events"] = [] # create a list
           for i in range(1,len(columnNames)):
               if row[i] == "UA": # append things if its an unexcused absence
                   curDic["events"].append(columnNames[i]) 
        else: # non event sheet
            for i in range(1,len(columnNames)): # iterate through each column
                if columnNames[i] in sheetNameToColumnNames[sheetName]:
                    curDic[columnNames[i]] = row[i] # push to the dictionary object with the column name
                
# get requirement calclulations
sheet = spreadsheet.worksheet("Requirement Calculations").get_all_values()
columnNames = sheet[0]
for row in sheet[1:]: # iterate through the rows of the requirement calculations sheet, skip the column names
    name = row[0].lower()
    if name =="yim, daeun":
        name = "yim, da eun"
    elif name == "kim, soeun":
        name = "kim, so eun"



    if name not in contactDic:
        continue
    email = contactDic[name]
    print(name,email)
    print(dicData[email])
    curDic = dicData[email]["Requirement Fines"]
    for i in range(1,len(columnNames)): # skip the name column
        curDic[columnNames[i]] = row[i]

json_string = json.dumps(dicData, indent=4)

with open('data.json', 'w') as file:
    file.write(json_string)
        




