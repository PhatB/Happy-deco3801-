import requests
import datetime
id = "66e384b7c14bcef4f162d6ea"
command = ""
message = """Commands:
record <moisture> <temperature> <sunlight>  - creates a new record
id <id> - sets device id
exit - exit"""

api_url = "https://deco3801-teamhappy.uqcloud.net/api/EnvironmentRecords"

while command != "exit":
    print(message)
    inp = input("command:")
    inp = inp.split()
    command = inp[0]
    if command == "record":
        if (len(inp) < 4):
            print("Not enough arguments...")
            continue;
        body = {
            "device":id,
            "time":datetime.datetime.now().isoformat(),
            "moisture": int(inp[1]),
            "temperature": int(inp[2]),
            "sunlight": int(inp[3]),
        }
        response = requests.post(api_url, json=body)
        print(response.text)

    if command == "id":
        id = inp[1]
        continue

