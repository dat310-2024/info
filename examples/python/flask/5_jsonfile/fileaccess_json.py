import json

FILENAME = "postcodes.json"

def create_file(filename):
    try:
        # create file
        with open(filename, 'x') as fp:
            pass
    except:
        print('{filename} already exists')

def readJSON(filename):
    dict = {}
    with open(filename, "r") as f:
        filecontent = f.read()
        if filecontent == "":
            print("Empty file")
        else:
            dict = json.loads(filecontent)
    return dict

def writeJSON(filename, data):
    jsonstring = json.dumps(data)
    with open(filename, "w") as f:
        f.write(jsonstring)

if __name__ == "__main__":
    postcodes = {
        "0001": "Oslo",
        "4036": "Stavanger",
        "4041": "Hafrsfjord",
        "7491": "Trondheim",
        "9019": "Tromsø"
    }
    
    create_file(FILENAME)
    writeJSON(FILENAME, postcodes)
