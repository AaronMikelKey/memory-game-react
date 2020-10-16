const winOrLose = (score, max, bool) => {
    if (score === max - 1) {
        alert("You win!")
        window.location.reload();
    } else if (bool === false) {
        alert("You lose.")
        window.location.reload();
    }
}

export default winOrLose;