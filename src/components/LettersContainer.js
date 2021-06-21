import "./LettersContainer.css"

const letters = "abcdefghijklmnopqrstuvwxyz".split("")

export function LettersContainer(props) {
    console.log("rendered")
    console.log(props)
    return (
        <div>
            {
                letters.map((letter) => {
                    if(props.correctLetters.includes(letter) || props.wrongLetters.includes(letter)) {
                        return (
                            <h3 className="pickedLetter">
                                {letter}
                            </h3>
                        )
                    } else {
                        return (
                            <h3 className="letterBlock" onClick={props.handlePick}>
                                {letter}
                            </h3>
                        )
                    }
                })
            }
        </div>
    )
}