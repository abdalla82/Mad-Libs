document.getElementById('submit-btn').addEventListener('click', displayMessage);

function displayMessage() {
    let verb = document.getElementById('word1').value;
    let noun = document.getElementById('word2').value;
    let adjective = document.getElementById('word3').value;
    let message = 'I enjoy it when you go' + ' ' + verb + ' ' + 'with' + ' ' + noun + ' ' + 'I,' + ' ' + 'its very' + ' ' + adjective;
    document.getElementById('madlib').innerHTML = message;
}