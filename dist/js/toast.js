const toast = document.querySelector('#toast')
const closeBtn = document.querySelector('#close-btn')

closeBtn.addEventListener('click', () => {
  if (!toast.classList.contains('hidden')) {
    toast.classList.add('hidden')
  }
})
