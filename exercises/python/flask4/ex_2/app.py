"""
Exercise #2: Shopping cart
"""

from flask import Flask, render_template, request, redirect, url_for, flash, abort, session

app = Flask(__name__)
app.debug = True  # only for development!
app.secret_key = "any random string"


@app.route("/")
def index():
    # TODO show cart contents
    return render_template("page.html", cart=dict())


@app.route("/add", methods=["POST"])
def add():
    # TODO add product to cart
    return redirect(url_for("index"))


@app.route("/remove", methods=["GET"])
def remove():
    # TODO remove product from cart
    return redirect(url_for("index"))


if __name__ == "__main__":
    app.run()
