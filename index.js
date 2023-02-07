const color = document.getElementById("color")
const scheme = document.getElementById("scheme")
const button = document.getElementById("button")

button.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(`https://www.thecolorapi.com/scheme?hex=${color.value.replace("#","")}&mode=${scheme.value}&count=5`)
        .then(resp => resp.json())
        .then(data => {
            document.getElementById("helptext").textContent =
                "Click on color or Hex-code to copy HEX-code to clipboard."
            for (let i=0; i<5; i++) {
                document.getElementById(`col${i}`).style.backgroundColor = data.colors[i].hex.value
                document.getElementById(`txt${i}`).textContent = data.colors[i].hex.value
                document.getElementById(`colon${i}`).classList.add("colon", "tooltip");
                document.getElementById(`colon${i}`).addEventListener("click", ()=> {
                    navigator.clipboard.writeText(data.colors[i].hex.value)
                })
            }
        })
})