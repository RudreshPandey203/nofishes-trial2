from flask import Flask, render_template, request,jsonify

app = Flask(__name__, template_folder="templates", static_folder="static")

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/another_page')
def another_page():
    return render_template('another_page.html')

    
@app.route("/predict#search-bar-zone", methods=['POST'])
def predict():
    if request.method == 'POST':
        url_send = request.form['url']
        print(url_send)
        testno = 1
    return render_template('index.html', prediction_text=url_send,testno={})

@app.route("/add#add-bar-zone", methods=['POST'])
def add():
    if request.method =='POST':
        url_add = request.form['add']
    return render_template('index.html',thankmsg="Thankyou for reporting the website, you made us more efficient just now!",url_add=url_add)        

if __name__ == '__main__':
    app.run(debug=True)