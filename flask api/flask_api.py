import pickle
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import requests
from speech_synthesis import text_to_speech

app = Flask(__name__)
CORS(app)

# Load the saved model
with open('flask_api/model_insurance_clv.pkl', 'rb') as f1:
    model1 = pickle.load(f1)
with open('flask_api/model_banking_clv.pkl', 'rb') as f2:
    model2 = pickle.load(f2)

@app.route("/insClv", methods=["POST"])
def insClv():
    # Parse the incoming request data
    data = request.get_json()
    request_data = data.get("inputs")
    input1 = request_data['input1']
    input2 = request_data['input2']
    input3 = request_data['input3']
    input4 = request_data['input4']
    input5 = request_data['input5']
    input6 = request_data['input6']

    # Use the model to generate a prediction
    prediction = model1.predict([[input1, input2, input3, input4, input5, input6]])

    return jsonify({"result": prediction[0]})

@app.route("/banClv", methods=["POST"])
def banClv():
    # Parse the incoming request data
    data = request.get_json()
    request_data = data.get("inputs")
    input1 = request_data['input1']
    input2 = request_data['input2']
    input3 = request_data['input3']
    input4 = request_data['input4']
    input5 = request_data['input5']
    input6 = request_data['input6']
    input7 = request_data['input7']
    input8 = request_data['input8']
    input9 = request_data['input9']

    # Use the model to generate a prediction
    prediction = model2.predict([[input1, input2, input3, input4, input5, input6, input7, input8, input9]])

    return jsonify({"result": prediction[0]})

@app.route("/ai", methods=["POST"])
def aiAssistant():
    data = request.get_json()
    new_text = data['input']
    start_text = "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, " \
                 "and very friendly."
    text = start_text + "\\n\\nHuman: " + new_text

    headers = {'Content-Type': 'application/json',
               'Authorization': 'Bearer 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'
               }
    data = {
      "model": "text-davinci-003",
      "prompt": text,
      "temperature": 0.9,
      "max_tokens": 150,
      "top_p": 1,
      "frequency_penalty": 0.0,
      "presence_penalty": 0.6,
      "stop": [" Human:", " AI:"]
    }
    chat_gpt_response = requests.post('https://api.openai.com/v1/completions', json=data, headers=headers)
    resp = chat_gpt_response.json()
    gpt_answer = resp["choices"][0]["text"]
    text_to_speech(gpt_answer)
    return send_file('..\\audioFiles\\test.mp3', mimetype='audio/mp3')

if __name__ == "__main__":
  app.run()