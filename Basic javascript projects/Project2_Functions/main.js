const myEvents = new Event("myCustomeEvent")
document.addEventListener("myCustomEvent", e=> {
    console.log(e)
    document.dispatchEvent(myEvent)
})
