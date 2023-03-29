const calcular = document.querySelector('#calcular');

    calcular.addEventListener('click', (event) => {
    event.preventDefault();

    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;
    const IMC = peso / (altura * altura);

    if (IMC < 18.5) {
        document.getElementById("aa").innerHTML = `Seu IMC é: ${IMC.toFixed(2)} abaixo do peso`;
    }
    else if (IMC >= 18.5 && IMC <= 24.9) {
        document.getElementById("aa").innerHTML = `Seu IMC é: ${IMC.toFixed(2)} Peso ideal`;

    }
    else if (IMC >= 25 && IMC <= 29.9) {
        document.getElementById("aa").innerHTML = `Seu IMC é: ${IMC.toFixed(2)} sobrepeso`;
    }
    else if (IMC >= 30 &&  IMC <= 34.9) {
        document.getElementById("aa").innerHTML = `Seu IMC é: ${IMC.toFixed(2)} obesidade grau I`;
    }
    else if (IMC >= 35 && IMC <= 39.9) {
        document.getElementById("aa").innerHTML = `Seu IMC é: ${IMC.toFixed(2)} obesidade grau II`;
    }
    else if (IMC >= 40 && IMC <= 50) {
        document.getElementById("aa").innerHTML = `Seu IMC é: ${IMC.toFixed(2)} obesidade  grau III`;
    }
    })

