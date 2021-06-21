import "./HangmanContainer.css"

export function HangmanContainer(props) {

    const gameStart =
        <div className="gameStart">
        |--------|<br/>
        | <br/>
        | <br/>
        | <br/>
        | <br/>
        | <br/>
        🔥🔥🔥🔥🔥<br/>
        <div className="hangman">
            <div style={{visibility: props.wrongLetterCount < 1 ? 'hidden' : 'visible'}}>🤪</div>
            <div>
                <span style={{visibility: props.wrongLetterCount < 2 ? 'hidden' : 'visible'}}>—</span>
                <span style={{visibility: props.wrongLetterCount < 3 ? 'hidden' : 'visible'}}>|</span>
                <span style={{visibility: props.wrongLetterCount < 4 ? 'hidden' : 'visible'}}>—</span>
            </div>
            <div>
                <span style={{visibility: props.wrongLetterCount < 5 ? 'hidden' : 'visible'}}>/</span>
                <span style={{visibility: props.wrongLetterCount < 6 ? 'hidden' : 'visible'}}>\</span>
            </div>
        </div>

        </div>
    return (
        <div>
            {gameStart}
        </div>
    )
}

