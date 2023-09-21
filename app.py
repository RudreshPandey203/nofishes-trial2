from flask import Flask, render_template, request

app = Flask(__name__, template_folder="templates", static_folder="static")

@app.route("/")
def home():
    return render_template("index.html")
    
@app.route("/predict",methods=['POST','GET'])
def predict():
    if(request.method=='POST'):
        print(request.form)

        url_send = request.form.get('url')
        print(url_send)
    return render_template('index.html',prediction_text="Chodd chaad ke apne salim ki gali",oldurl=url_send)

    
if __name__ == "__main__":
    app.run(debug=True)