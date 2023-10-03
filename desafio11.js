 // alert('Olá, Mundo!'); 
 
// var nome =  prompt('Digite seu nome');
//malert('Seja Bem Vinda, ' + nome +'!');

// var n1 =parseInt( prompt('Digite o primeiro número:'));
// var n2 = parseInt( prompt('Digite o segundo número:'));
// var media = (n1+n2)/2;

// alert('A média é: ' + media);

// if(media >= 7){
//     alert('Aprovada!')
// }else{
//     alert('Reprovada!')
// }
 
var numero = parseInt(prompt('Digite um número inteiro!'))

if(numero > 0 && numero < 100 && numero % 2 === 0){
    alert('O número atende aos critérios!')
}else{
    alert('O número não atende aos critérios!')
}
