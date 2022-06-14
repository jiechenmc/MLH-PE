from flask import Flask, jsonify, redirect, request
from dotenv import load_dotenv
import os

load_dotenv()
app = Flask(__name__)


@app.route("/")
def index():
    print(request.host)
    return redirect(request.base_url + ":3000", code=301)


@app.route("/api/linkedin", methods=["GET"])
def linkedin():
    return jsonify({
        "username": "jiechen-sbu",
        "url": "https://www.linkedin.com/in/jiechen-sbu/"
    })


@app.route("/api/github", methods=["GET"])
def github():
    return jsonify({
        "username": "jiechenmc",
        "url": "https://github.com/jiechenmc"
    })


@app.route("/api/resume", methods=["GET"])
def resume():
    return jsonify({
        "url":
        "https://drive.google.com/file/d/1YYvgQczc_2N1tn6oSFrAqZYatgVpykkL/view"
    })


@app.route("/api/journey", methods=["GET"])
def journey():
    return jsonify([{
        "date": "August 2021",
        "title": "Fall of Freshman Year",
        "events": ["Introduction to Object-Oriented Programming"]
    }, {
        "date":
        "January 2022",
        "title":
        "Spring of Freshman Year",
        "events": ["Data Structures\n", "Foundations of Computer Science"]
    }, {
        "date": "May 2022",
        "title": "Summer of Freshman Year",
        "events": ["MLH Production Engineering Fellowship!"]
    }])
