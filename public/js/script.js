$(document).ready(() => {

    let socket = io.connect()

    socket.on('userStatus', (message) => {
        console.log(message)
    })

    socket.on('incoming', (msg) => {
        $(msg).appendTo('#msgBdy');
    })


    socket.on('onLoad', (data) => {
        $('#msgBdy').html(data)
    })

    $('#submitBtn').click(() => {
        let data = {
            'typedText': $("#inputTxt").val()
        }
        if(data.typedText === ""){
            alert('Please leave a valid message buddy.')
        } else {
            $('#inputTxt').val('')
            socket.emit('message', data)
        }
    })
})