// Write your code here!

document.body.removeChild(document.querySelector("main"))

const newHeader = document.createElement("h1")
document.appendChild(newHeader)

// newHeader.id = "victory"

// const victory = document.createElement("#victory")
// newHeader.appendChild(victory)

const newContent = document.createTextNode("Sanjeev is the champion")
newHeader.appendChild(newContent)
