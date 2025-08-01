// desafio: Programar um algoritmo que simule o cadastro de pokemons e verifique qual é o mais forte entre eles.

let pokemons = ["CHARIZARD", "BLASTOISE", "CATERPIE", "VENUSAUR", "DRAGONITE", "PIKACHU"]
let informacaoPokemons = [
["CHARIZARD","M", "Lv2","HP:13/13"],
["BLASTOISE", "F", "Lv2", "HP:13/13"],
["CATERPIE", "M", "Lv5","HP:25/25"],
["VENUSAUR", "F", "Lv5", "HP:25/25"]
["DRAGONITE", "F", "Lv5", "HP:24/24"],
["PIKACHU", "F", "Lv5", "HP:15/15"],
]

console.log("Bem-vindo ao sistema de cadastro de pokemons")
console.log(pokemons[0] + " - Cadastrado com sucesso")
console.log(pokemons[1] + " - Cadastrado com sucesso")
console.log(pokemons[2] + " - Cadastrado com sucesso")
console.log(pokemons[3] + " - Cadastrado com sucesso")
console.log(pokemons[4] + " - Cadastrado com sucesso")
console.log(pokemons[5] + " - Cadastrado com sucesso")

console.log("Pokemons cadastrados com sucesso")

//Qual Pokemon é mais forte?

let pokemon1 = "Charizard"
let pokemon2 = "Dragonitie"
console.log("o pokemon " + pokemon1 + " é mais forte que o pokemon " + pokemon2)
let resultado = (pokemon1 > pokemon2)
console.log(resultado)
console.log("O Dragonite é mais forte que o Charizard por que ele está no level 5 e o Charizard no level 2")


// Outro Exemplo de qual pokemon é mais forte
let Pokemon = "Caterpie"
let Pokemon2 = "Venusaur"
console.log("O pokemon " + Pokemon + " tem a mesma força que o " + Pokemon2 + "?")
let resultado2 = (Pokemon === Pokemon2)
console.log(!resultado2)
console.log ("Caterpie e Venusaur tem a mesma força por que estão no mesmo level.")