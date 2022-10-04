const timeNodes = Array.from(document.querySelectorAll(['data-time']))
const seconds = timeNodes.map(node=>node.dataset.time).map(timeCode => {
    const [mins,secs] = timeCode.split(":").map(parseFloat);
    return mins*60 + secs
}).reduce((total,vidSecs)=> total + vidSecs);
let secondsLeft = seconds;
const hours = Math.floor(secsLeft/60);
secondsLeft = secondsLeft % 3600;


