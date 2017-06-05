const personForm = document.querySelector('form#personForm')

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const name = f.personName.value

  const a = ev.target
  const home = a.homeTown.value
  const b = ev.target
  const color = b.color.value
  const ret = 'Hello ' + name + ' from ' + home + ' '
  document.querySelector('h1').textContent = ret

  const fin = 'SUCCESS'
  document.querySelector('h2').textContent = fin

  const yay = 'Nice Job!!!'
  document.querySelector('marquee').textContent = yay

  var clr = 'yellow'
  if(color === 'yellow'){
        clr = 'green'
  }
  else{
        clr = 'yellow'
  }
  
  document.getElementById('myH2').style.color = clr
    document.getElementById('myH1').style.color = clr
  document.getElementById('marquee').style.color = clr
  document.getElementById('marquee').style.fontSize = 'xx-large'

  document.body.style.backgroundColor = color
}

personForm.addEventListener('submit', handleSubmit)