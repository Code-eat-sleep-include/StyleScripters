from flask import Flask, request, jsonify
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
import numpy as np
from numpy.linalg import norm
import pickle

app = Flask(__name__)

# Load the model and embeddings
model = load_model('path_to_your_model')
with open('embeddings.pkl', 'rb') as f:
    feature_list = pickle.load(f)
with open('filenames.pkl', 'rb') as f:
    filenames = pickle.load(f)

def extract_features(img_path, model):
    img = image.load_img(img_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    expanded_img_array = np.expand_dims(img_array, axis=0)
    preprocessed_img = preprocess_input(expanded_img_array)
    result = model.predict(preprocessed_img).flatten()
    normalized_result = result / norm(result)
    return normalized_result

@app.route('/extract_features', methods=['POST'])
def extract():
    file = request.files['file']
    file_path = "path_to_save_uploaded_image"
    file.save(file_path)
    features = extract_features(file_path, model)
    return jsonify(features.tolist())

@app.route('/get_recommendations', methods=['POST'])
def recommend():
    data = request.json
    uploaded_features = np.array(data['features'])
    similarities = [np.dot(uploaded_features, feat) for feat in feature_list]
    index = np.argmax(similarities)
    recommended_image = filenames[index]
    return jsonify({"recommended_image": recommended_image})

if __name__ == "__main__":
    app.run(debug=True)
