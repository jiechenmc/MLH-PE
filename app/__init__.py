from flask import Flask, jsonify, redirect, render_template, request
from dotenv import load_dotenv
from peewee import MySQLDatabase, Model, CharField, TextField
from playhouse.shortcuts import model_to_dict
import os

load_dotenv()
app = Flask(__name__)

db = MySQLDatabase(os.getenv("MYSQL_DATABASE"),
                   user=os.getenv("MYSQL_USER"),
                   password=os.getenv("MYSQL_PASSWORD"),
                   host=os.getenv("MYSQL_HOST"),
                   port=3306)


class TimelinePost(Model):
    date = CharField()
    title = CharField()
    events = TextField()

    class Meta:
        database = db


db.connect()
db.create_tables([TimelinePost])


@app.route("/api/timeline_post", methods=["GET", "POST", "DELETE"])
def timeline_post():
    if request.method == "POST":
        date = request.form["date"]
        title = request.form["title"]
        events = request.form["events"]

        timeline_post = TimelinePost.create(date=date,
                                            title=title,
                                            events=events)

        return model_to_dict(timeline_post)
    elif request.method == "GET":
        return {'posts': [model_to_dict(p) for p in TimelinePost.select()]}
    elif request.method == "DELETE":
        del_id = request.form["id"]
        TimelinePost.delete_by_id(del_id)
        return f'Removed ID: {del_id}'


@app.route("/timeline")
def timeline():
    return render_template("timeline.html")


@app.route("/")
def index():
    return redirect(request.environ.get('HTTP_ORIGIN',
                                        'http://localhost:5000').replace(
                                            ":5000", ":3000"),
                    code=301)


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


@app.route("/api/projects", methods=["GET"])
def projects():
    return jsonify([
        {
            "title": "Pokemon Data Explorer",
            "date": "May 2022",
            "description": "Pokedex clone?",
            "URL": "https://github.com/jiechenmc/poke_data_explorer",
            "status": "incomplete"
        },
    ])