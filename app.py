from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/base')
def base():
    return render_template('base.html')

@app.route('/')
def home():
    return render_template('home.html')


if __name__ == '__main__':
    app.run(debug=True, port=5000)