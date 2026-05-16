import tensorflow as tf
from tensorflow.keras.models import load_model

model_path = 'fsrcnn_model.h5'
model = load_model(model_path)

