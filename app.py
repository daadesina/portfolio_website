from flask import Flask, render_template, redirect, url_for, send_from_directory
import json

app = Flask(__name__)


# certificates
with open('./certificates.json', 'r') as certificate_json:
    certificate_array_dict = json.load(certificate_json)

@app.route('/base')
def base():
    return render_template('base.html')

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/testing')
def testing():
    return render_template('testing.html')

@app.route('/certificates')
def certificates():
    return render_template('certificates.html', certificate_array_dict=certificate_array_dict)

@app.route('/download_certificate/<institution>/<filename>')
def download_certificate(institution, filename):
    return send_from_directory(f'static/images/certificates/{institution}', filename, as_attachment=True)

@app.route('/resume')
def resume():
    return render_template('resume.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')


if __name__ == '__main__':
    app.run(debug=True, port=5000)