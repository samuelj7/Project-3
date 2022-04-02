import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

engine = create_engine("sqlite:///Resources/california_housing.sqlite")
Base = automap_base()
Base.prepare(engine, reflect=True)
Seasonal=Base.classes.seasonal_housing
ca_county_data=Base.classes.ca_county_data

app = Flask(__name__)


@app.route("/")
def welcome():
    return(
        f"Available Routes:<br/>"

    )

if __name__ == '__main__':
    app.run(debug=True)