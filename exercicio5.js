function reverseString(str) {
    let stringReverse = []
    for (let i = str.length - 1; i >= 0; i--) {
        stringReverse.push(str[i])
    }
    return stringReverse.join('')
}
console.log(reverseString('Me Chama Pra Entrevista Target !'))