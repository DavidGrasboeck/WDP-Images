function startTimer(durationInSeconds, callback) {
    const milliseconds = durationInSeconds * 1000;

    const timerId = setTimeout(() => {
        callback();
        startTimer(durationInSeconds,callback);
    }, milliseconds);
}

window.onload = () => {
    var i = 1;
    startTimer(1, () => {
        console.log('asdf');

        document.body.style.backgroundImage = `url('../Images/bg${i}.jpg')`;
        i %= 6;
        i++;
    });
};

