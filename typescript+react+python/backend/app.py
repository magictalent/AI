from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime

app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = "supersecretkey"  # change in production

# Fake DB (replace with real DB later)
users = {}

# Register
@app.route("/api/register", methods=["POST"])
def register():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if username in users:
        return jsonify({"error": "User already exists"}), 400

    users[username] = generate_password_hash(password)
    return jsonify({"message": "User registered successfully"})

# Login
@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    user_hash = users.get(username)
    if not user_hash or not check_password_hash(user_hash, password):
        return jsonify({"error": "Invalid credentials"}), 401

    token = jwt.encode(
        {"username": username, "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=2)},
        app.config['SECRET_KEY'],
        algorithm="HS256"
    )
    return jsonify({"token": token})

# Protected route
@app.route("/api/me", methods=["GET"])
def me():
    token = request.headers.get("Authorization")
    if not token:
        return jsonify({"error": "Token missing"}), 401

    try:
        decoded = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
        return jsonify({"user": decoded["username"]})
    except jwt.ExpiredSignatureError:
        return jsonify({"error": "Token expired"}), 401
    except jwt.InvalidTokenError:
        return jsonify({"error": "Invalid token"}), 401

if __name__ == "__main__":
    app.run(debug=True)
todos = []

@app.route("/api/todos", methods=["GET"])
def get_todos():
    return jsonify(todos)

@app.route("/api/todos", methods=["POST"])
def add_todo():
    data = request.json
    new_todo = {"id": len(todos)+1, "text": data["text"], "done": False}
    todos.append(new_todo)
    return jsonify(new_todo)

@app.route("/api/todos/<int:todo_id>", methods=["PUT"])
def update_todo(todo_id):
    data = request.json
    for t in todos:
        if t["id"] == todo_id:
            t["done"] = data["done"]
            return jsonify(t)
    return jsonify({"error": "Not found"}), 404