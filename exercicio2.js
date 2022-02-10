function findNumberFibbonacci(number) {
    let fibonacci = [0, 1];
    let i = 2;
    while (fibonacci[i - 1] < number) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        i++;
    }
    fibonacci.includes(number) 
    ? console.log(`O número ${number} está na posição ${fibonacci.indexOf(number)}`) 
    : console.log(`O número ${number} não está na sequência de Fibbonacci`);
    return fibonacci;
}
console.log(findNumberFibbonacci(42)); // Não está na sequência
console.log(findNumberFibbonacci(13)); // Está na sequência