greetingElement = document.getElementById('greeting');

var now = new Date();
var hour = now.getHours();

if (hour >= 5 && hour < 12) {
    greetingElement.innerText = 'Bom dia';
} else if (hour >= 12 && hour <= 18) {
    greetingElement.innerText = 'Boa tarde';
} else {
    greetingElement.innerText = 'Boa noite';
}