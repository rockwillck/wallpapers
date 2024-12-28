imgs = `images/bg-balls.png
images/bg-alley.png
images/bg-cat.png
images/bg-coffee.png
images/bg-grand.png
images/bg-gyeongju.png
images/bg-house.png
images/bg-pot.png
images/bg-spring.png`
onload = () => {
    for (let i of imgs.split("\n")) {
        let div = document.createElement("a")
        div.className = "imgHolder"
        div.href = i
        div.download = i
        let img = document.createElement("img")
        img.src = i
        img.addEventListener("load", () => {
            div.appendChild(img)
        })
        document.getElementById("wpp").appendChild(div)
    }
}