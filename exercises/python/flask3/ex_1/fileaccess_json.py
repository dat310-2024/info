import json

FILENAME = "playlist.json"

def create_file(filename):
    try:
        # create file
        with open(filename, 'x') as fp:
            pass
    except:
        print('{filename} already exists')

def readJSON(filename):
    list = []
    with open(filename, "r") as f:
        filecontent = f.read()
        if filecontent == "":
            print("Empty file")
        else:
            list = json.loads(filecontent)
    return list

def writeJSON(filename, data):
    jsonstring = json.dumps(data)
    with open(filename, "w") as f:
        f.write(jsonstring)

if __name__ == "__main__":
    create_file(FILENAME)
    # TODO: Write an intial song to the playlist file.

