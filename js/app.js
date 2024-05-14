const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const euro = document.querySelector("#euro")
// -----------------------------------------решение валют
const convert = (element, target, isSom) => {
    element.addEventListener("input", (e) => {
        const request = new XMLHttpRequest()
            request.open("GET", "data.json")
            request.setRequestHeader("Content-Type", "application/json")
            request.send()  

            request.addEventListener("load", () => {
                const response = JSON.parse(request.response)
                if(isSom){
            target.value = (e.target.value / response.usd).toFixed(2)
                         }else{
                target.value = (e.target.value * response.usd).toFixed(2)
                                            }
       e.target.value ==="" && (target.value = "")
    })
    })
}
convert(som, usd, true)
convert(usd, som)


const convert1 = (element, target, isSom) => {
   element.addEventListener("input", (e) => {
       const request = new XMLHttpRequest()
           request.open("GET", "data.json")
           request.setRequestHeader("Content-Type", "application/json")
           request.send()  

           request.addEventListener("load", () => {
               const response = JSON.parse(request.response)
               if(isSom){
           target.value = (e.target.value / response.euro).toFixed(2)
             }else{
               target.value = (e.target.value * response.euro).toFixed(2)
                           }
           e.target.value ==="" && (target.value = "")
   })
   })
}
convert1(som, euro, true)
convert1(euro, som)

const convert2 = (element, target, isUsd) => {
   element.addEventListener("input", (e) => {
       const request = new XMLHttpRequest()
           request.open("GET", "data.json")
           request.setRequestHeader("Content-Type", "application/json")
           request.send()  

           request.addEventListener("load", () => {
               const response = JSON.parse(request.response)
               if(isUsd){
                target.value = (e.target.value * response.usd / response.euro)
             }else{
              target.value = (e.target.value / response.usd * response.euro)
                           }
             target.value ==="" && (target.value = "")
   })
   })
}
convert2(usd, euro, true)
convert2(euro, usd)
