console.log ("start")

// function logThis(string) {
//    console.log(string)
// }

// logThis("logged message")


// const variable = "value"

// const logThat = (string) => {
//    console.log(string)
// }

// logThat('van valamiii')

// function returnDouble2 (number) {
//    return number * 4
// }


// const returnDouble = (number) => number * 2 

// console.log (returnDouble(10))
// console.log (returnDouble2(10))




// const chairCoponent = (nth) => 
//    //return "<h3>" + nth + "</h3>"
//    //return '<div class="chair">' + nth + "</div>"
//    return `
//       <div class="chair">
//          ${nth}
//       </div>
//          `

//    const roomComponent = (roomName , chairCount) => {

//       for (let i = 0; i < chairCount; i**) {
//          rootElement.insertAdjacentHTML('beforeend', chairCoponent(i))
//       }
//    }

//    roomComponent("proba, 10")

// const rootElement = document.querySelector('#root')

// rootElement.insertAdjacentHTML('beforeend', chairCoponent(5))

// for (let i =0 ; i < 5 ; i++) {
//    rootElement.insertAdjacentHTML('beforeend', chairCoponent(i))
// }



const cinemaData = [
  {
    name: "comedy",
    chairs: 15
  },
  {
    name: "drama",
    chairs: 10
  },
  {
    name: "thriller",
    chairs: 25
  },
  {
    name: "kamionos",
    chairs: 50
  }
]

const chairComponent = (nth) => `
  <div class="chair">
    ${nth}
  </div>
`

const roomComponent = (roomName, chairCount) => {
  let roomHtml = ""
  
  for (let i = 1; i <= chairCount; i++) {
    roomHtml += chairComponent(i)
  }

  return `
    <div class="room ${roomName}">
      ${roomHtml}
    </div>
  `
}

const cinemaComponent = (rooms) => {
  let cinemaHtml = ""

  for (let i = 0; i < rooms.length; i++) {
    cinemaHtml += roomComponent(rooms[i].name, rooms[i].chairs)
  }

  return `
    <div class="cinema">
      ${cinemaHtml}
    </div>
  `
}

const rootElement = document.querySelector('#root')

rootElement.insertAdjacentHTML('beforeend', cinemaComponent(cinemaData))