const seedColorEl = document.getElementById("seed-color")
const colorModeEl = document.getElementById("color-mode")
const getColorsBtn = document.getElementById("get-colors-btn")
const colorSchemeEl = document.getElementById("color-scheme")

function renderColors(hexCode="ff0000", mode="monochrome") {
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexCode}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            colorSchemeEl.innerHTML = data.colors.map(color => {
                return `<div class="color-section">
                            <div 
                                style="background-color: ${color.hex.value}" class="color-column"
                                >
                            </div>
                            <div class="color-hex-value">${color.hex.value}</div>
                        </div>`
            }).join("")
        })
}

getColorsBtn.addEventListener("click", e => {
    e.preventDefault()
    const hexCode = seedColorEl.value.slice(1)
    const mode = colorModeEl.value
    renderColors(hexCode, mode)  
})

renderColors()
