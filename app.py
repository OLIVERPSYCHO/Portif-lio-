from flask import Flask, render_template

app = Flask(__name__, static_folder='static')

@app.route("/")
def index():
    navn = "Sandvika"
    return render_template("index.html", navn=navn)

@app.route("/games")
def games():
    return render_template("games.html")

@app.route("/playlist")
def playlist():
    return render_template("playlist.html")

@app.route("/projetos")
def projetos():
    return render_template("projetos.html")

@app.route("/snake")
def snake():
    return render_template("snake.html")

@app.route("/tictactoe")
def tictactoe():
    return render_template("tictactoe.html")

@app.route("/hangman")
def hangman():
    return render_template("hangman.html")

@app.route("/anuncios")
def anuncios():
    return render_template("anuncios.html")

@app.route("/easteregg")
def easteregg():
    return render_template("easteregg.html")

if __name__ == "__main__":
    app.run(debug=True)

