import "./GuessContainer.css";

export function GuessContainer(props) {
    const word = props.word.split("")
    return (
        <div>
            {
                word.map((letter) => {
                    if(props.correctLetters.includes(letter)) {
                        return (
                            <h2 className="guess">
                            {letter}
                        </h2>
                        )
                    }
                    return (
                        <h2 className="blank">
                            {letter}
                        </h2>
                    )
                })
            }
        </div>
    )
}