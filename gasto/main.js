let tempo = Number(prompt("Digite o tempo gasto em horas"))
let velocidade = Number(prompt("Digite a velocidade média em km/h"))

let distancia = tempo*velocidade
let litros = distancia/12

alert(litros.toFixed(3))