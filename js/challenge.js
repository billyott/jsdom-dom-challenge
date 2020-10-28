//variables
const counter = document.querySelector("#counter")
counter.innerHTML = 0
let counterContents = 0
let pausedStatus = false
const minusButton = document.querySelector("#minus")
const plusButton = document.querySelector("#plus")
const likesUl = document.querySelector(".likes")
const heartButton = document.querySelector("#heart")
const pauseButton = document.querySelector("#pause")
const commentsDiv = document.querySelector("#list")
const commentsUl = document.createElement("ul")
commentsDiv.append(commentsUl)
const commentForm = document.querySelector("#comment-form")
const commentInput = document.querySelector("#comment-input")

//event handlers
    
setInterval(function() {
    if (!pausedStatus) {
        counterContents++
        counter.innerHTML = counterContents;
        }
    }, 1000);

function handleDecrementCounter() {
    if (!pausedStatus) {
    counterContents--
    counter.innerHTML = counterContents
    }
}

function handleIncrementCounter() {
    if (!pausedStatus) {
    counterContents++
    counter.innerHTML = counterContents
    }
}

function handleLikeRecord() {
    if (!pausedStatus) {
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
}

function handlePauseEvents() {
    if (!pausedStatus) {
        pausedStatus = true
        pauseButton.innerHTML = "resume"
    } else {
        pausedStatus = false
        pauseButton.innerHTML = "pause"
        counter.innerHTML = 0
        counterContents = 0
    }
}

function handleCommentSubmissions(e) {
    const newComment = document.createElement("li")
    newComment.textContent = commentInput.value
    commentsUl.append(newComment)
    e.preventDefault()
}

//event listeners
minusButton.addEventListener('click', handleDecrementCounter)
plusButton.addEventListener('click', handleIncrementCounter)
heartButton.addEventListener('click', handleLikeRecord)
pauseButton.addEventListener('click', handlePauseEvents)
commentForm.addEventListener('submit', handleCommentSubmissions)

