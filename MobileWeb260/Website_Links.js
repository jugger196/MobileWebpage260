const parentElement = document.getElementById('text')
const newElement = Object.assign(document.createElement('a'), {
  href: 'https://eldenring.wiki.fextralife.com/Greatswords',
  textContent: parentElement.textContent
})
parentElement.textContent = ''
parentElement.appendChild(newElement)