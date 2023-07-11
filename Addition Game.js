var num1 = Math.ceil(Math.random() * 100)
var num2 = Math.ceil(Math.random() * 100)
var sum = num1 + num2
document.getElementById('num1').textContent = num1
document.getElementById('num2').textContent = num2

function result() {
    document.getElementById('text').classList.remove('d-none')
    var results = document.getElementById('result').value

    if (sum == parseInt(results)) {
        document.getElementById('text').textContent = 'Correct'
        document.getElementById('text').style.backgroundColor = '#028a0f'
        document.getElementById('text').style.color = 'white'
    } else {
        document.getElementById('text').textContent = 'Try Again'
        document.getElementById('text').style.backgroundColor = '#1e217c'
        document.getElementById('text').style.color = 'white'
    }
}
document.getElementById('restartButton').addEventListener('click', function() {
    document.getElementById('result').value = ''
    document.getElementById('text').classList.add('d-none')
    num1 = Math.ceil(Math.random() * 100)
    num2 = Math.ceil(Math.random() * 100)
    document.getElementById('num1').textContent = num1
    document.getElementById('num2').textContent = num2
    sum = num1 + num2




})