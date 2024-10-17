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
            "time":datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "moisture": float(inp[1]),
            "temperature": float(inp[2]),
            "sunlight": float(inp[3]),
        }
        header = {
            "Authorization":"Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjY2YWMwZTY0MWI4MWZhZDE3NzIyOGZiNSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJVc2VyMSIsIm5iZiI6MTcyODg4OTYyMiwiZXhwIjoxNzMxNDgxNjIyfQ.XjKkpZ8b05rJjpDURmbFq-4ueOxvpuvNGTvRd1cDxGs"
        }
        response = requests.post(api_url, json=body, headers=header)
        print(response.text)

    if command == "id":
        id = inp[1]
        continue

