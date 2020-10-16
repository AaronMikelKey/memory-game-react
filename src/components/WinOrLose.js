const winOrLose = (score, max) => {
    if (score === max - 1) {
        alert("You win!")
        window.location.reload();
    }
}

export default winOrLose;