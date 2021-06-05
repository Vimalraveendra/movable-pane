const splitBarEl = document.querySelector('.split-bar')
const pane1El = document.querySelector('.pane1')
const pane2El = document.querySelector('.pane2')

let ismdwn = 0
splitBarEl.addEventListener('mousedown', mouseDown)

function mouseDown() {
    console.log('dom',document.body)
  ismdwn = 1
  document.body.addEventListener('mousemove', mouseVertical)
  document.body.addEventListener('mouseup', end)
}

function mouseVertical(event) {
   
  if (ismdwn === 1) {
      console.log("event1",event.clientX)
      console.log("eventy",event.clientY)
      if(event.clientX<=300){

        pane1El.style.flexBasis = 300+ "px"
      }else{
        pane1El.style.flexBasis = event.clientX-event.clientY+ "px"
      }
     
  } else {
    end()
  }
}
const end = (e) => {
  ismdwn = 0
  document.body.removeEventListener('mouseup', end)
  splitBarEl.removeEventListener('mousemove', mouseVertical)
}

