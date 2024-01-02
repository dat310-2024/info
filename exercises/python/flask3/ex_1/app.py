"""
Flask: Form handling
"""

from flask import Flask, url_for, redirect, request,render_template

app = Flask(__name__)
#TODO: load this playlist from file.
playlist = [
    {
    "name": "Hello World!",
    "band": "Best band ever"
}]

@app.route("/")
def index():
    return render_template("index.html", playlist=playlist)

@app.route("/addsong", methods=["POST"])
def addsong():
    name = request.form.get("song","")
    band = request.form.get("band","")

    playlist.append({ "name": name, "band": band })
    #TODO: write playlist to file.

    # redirect to main
    return redirect("/")

@app.route("/delete", methods=["POST"])
def delete():
    index = request.form.get("songindex", "-1")
    try:
        index = int(index)
        if index > -1:
            playlist.pop(index)
            #TODO: write playlist to file.
    except:
        print("Received a non int index")

    # redirect to main
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
