//document.getElementById("count").innerText = 5
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
count = 0
function increment() {
    count += 1
    countEl.textContent = count
} 

function save() {
    console.log(count)
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}