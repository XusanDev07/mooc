// var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
//     container: 'body'
//   })
// var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
// var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
// return new bootstrap.Popover(popoverTriggerEl)
// })
// var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
//     trigger: 'focus'
//     .color = 'red'
//   })
// let exampleEl = document.getElementById('example')
// let popover = new bootstrap.Popover(exampleEl, options)

let toastTrigger = document.getElementById('liveToastBtn')
let toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    let toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  })
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})




