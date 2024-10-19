

document.getElementById("changeformat").addEventListener('click', function(){
    let textInput = document.getElementById("firsttext").value
    let newdate = textInput.replace(/(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})/g, '$3-$2-$1')
    document.getElementById('newtext').textContent = newdate
})