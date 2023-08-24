from flask import Flask, request, render_template, redirect
import os

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/')
def index():
    files = os.listdir('notes')
    notes = []

    for file in files:
        with open(f'notes/{file}', 'r') as f:
            content = f.read()
            notes.append({"name":file ,"content":content})

    return render_template('index.html', notes=notes)

@app.route('/save_text/<title>', methods=['POST'])
def save_text(title):
    data = request.get_json()
    text = data.get('text')
    
    if text:
        with open(f'notes/{title}', 'w') as file:
            file.write(text)
        with open(f'backups/{title}', 'w') as file:
            file.write(text)
        return redirect('/')
    else:
        return 'Error: No text data received.', 400

@app.route('/remove/<title>', methods=['POST'])
def remove(title):
    file_path = os.path.join('notes', title)

    if os.path.exists(file_path):
        os.remove(file_path)
        return redirect('/')
    else:
        return 'File not found!', 404

if __name__ == '__main__':
    app.run(debug=True,port=5001)