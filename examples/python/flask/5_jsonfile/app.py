"""
Flask: Form handling
"""

from flask import Flask, url_for, redirect, request,render_template
from fileaccess_json import readJSON, writeJSON, FILENAME

app = Flask(__name__)


postcodes = readJSON(FILENAME)



@app.route("/")
def index():
    # redirect to form
    return redirect(url_for("static", filename="form.html"))


@app.route("/postnumber", methods=["GET"])
def getEntry():
    number = request.args["number"]
    city = postcodes.get(number, None)
    return render_template("lookup.html", city= city, postcode = number)
    

@app.route("/addpostnumber", methods=["POST"])
def addEntry():
    number = request.form.get("number", "")
    city = request.form.get("city","")
    
    # important to check if there data is correct.
    if len(number) != 4:
        return render_template("added.html", error = "Postcode must be length 4")
    try:
        int(number)
    except:
        return render_template("added.html", error = "Postcode can only contain numbers")
    if len(city) == 0:
        return render_template("added.html", error = "City must be provided")

    postcodes[number] = city
    writeJSON(FILENAME,postcodes)
    return render_template("added.html",city = city, postcode = number )


if __name__ == "__main__":
    app.run()
