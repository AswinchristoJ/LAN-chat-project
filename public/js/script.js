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

        $('#inputTxt').val('')
        socket.emit('message', data)
    })
})