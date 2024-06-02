console.log('Hello, World!');
const calcul = (age) => {
    const annee = Math.floor(Math.random() * 100);
    if (age === annee) {
        return 'Nous sommes les mêmes'
    } else if (age > annee) {
        return 'Je suis plus grand !'
    } else {
        return 'Je suis plus petit :('
    }
}
console.log(calcul(Math.floor(Math.random() * 100)));
console.log(Math.random() * 100 + ' ' + calcul())