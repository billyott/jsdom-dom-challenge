const counter = document.querySelector("#counter")
counter.innerHTML = 0

let counterContents = 0

setInterval(function(){ 
        counterContents++
        counter.innerHTML = counterContents
    ; }, 3000);
    
const minusButton = document.querySelector("#minus")

minusButton.addEventListener('click', handleDecrementCounter)

function handleDecrementCounter() {
    counterContents--
    counter.innerHTML = counterContents
}

const plusButton = document.querySelector("#plus")
plusButton.addEventListener('click', handleIncrementCounter)

function handleIncrementCounter() {
    counterContents++
    counter.innerHTML = counterContents
}

const likesUl = document.querySelector(".likes")
const heartButton = document.querySelector("#heart")

heartButton.addEventListener('click', handleLikeRecord)

function handleLikeRecord() {
    if (document.querySelector(`[data-counter-number='${counter.textContent}']`)) {
        const counterLikeLi = document.querySelector(`[data-counter-number='${counter.textContent}']`)
        counterLikeLi.textContent = `number: ${counterLikeLi.dataset.counterNumber} - like count: ${parseInt(counterLikeLi.dataset.counterNumberlikes)+1}`
        counterLikeLi.dataset.counterNumberlikes = parseInt(counterLikeLi.dataset.counterNumberlikes)+1
    } else {
        const counterNumber = counter.innerHTML
        const likeCount = 1
        const counterLikeLi = document.createElement("li")
        counterLikeLi.textContent = `number: ${counterNumber} - like count: ${likeCount}`
        counterLikeLi.dataset.counterNumber = counterNumber
        counterLikeLi.dataset.counterNumberlikes = likeCount
        likesUl.append(counterLikeLi)
    }
}