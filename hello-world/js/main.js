import { Release } from "./Release.js"
import { calculateBalance } from "./functions/calculateBalance.js"

// janeiro
const januaryReleases = [
  new Release("Salário", "receita", 3000),
  new Release("Aluguel", "despesa", 1000),
  new Release("Conta de Energia", "despesa", 200),
  new Release("Conta de Água", "despesa", 100),
  new Release("Internet", "despesa", 100),
  new Release("Transporte", "despesa", 300),
  new Release("Lazer", "despesa", 300),
  new Release("Alimentação", "despesa", 500),
  new Release("Condomínio", "despesa", 300),
  new Release("Farmácia", "despesa", 10)
]
const balanceJanuary = calculateBalance("Janeiro", 0, januaryReleases)

console.log(balanceJanuary)

// fevereiro
const februaryReleases = [
  new Release("Salário", "receita", 3000),
  new Release("Aluguel", "despesa", 1000),
  new Release("Conta de Energia", "despesa", 200),
  new Release("Conta de Água", "despesa", 100),
  new Release("Internet", "despesa", 100),
  new Release("Transporte", "despesa", 300),
  new Release("Lazer", "despesa", 300),
  new Release("Alimentação", "despesa", 500),
  new Release("Condomínio", "despesa", 300),
  new Release("Farmácia", "despesa", 10)
]
const balanceFebruary = calculateBalance("Fevereiro", balanceJanuary.balance, februaryReleases)

console.log(balanceFebruary)

// março
const marchReleases = [
  new Release("Salário", "receita", 4000),
  new Release("Aluguel", "despesa", 1000),
  new Release("Conta de Energia", "despesa", 200),
  new Release("Conta de Água", "despesa", 100),
  new Release("Internet", "despesa", 100),
  new Release("Transporte", "despesa", 300),
  new Release("Lazer", "despesa", 300),
  new Release("Alimentação", "despesa", 500),
  new Release("Condomínio", "despesa", 300),
  new Release("Farmácia", "despesa", 10)
]
const balanceMarch = calculateBalance("Março", balanceFebruary.balance, marchReleases)

console.log(balanceMarch)

// abril
const aprilReleases = [
  new Release("Salário", "receita", 4000),
  new Release("Aluguel", "despesa", 1000),
  new Release("Conta de Energia", "despesa", 200),
  new Release("Conta de Água", "despesa", 100),
  new Release("Internet", "despesa", 100),
  new Release("Transporte", "despesa", 300),
  new Release("Lazer", "despesa", 300),
  new Release("Alimentação", "despesa", 500),
  new Release("Condomínio", "despesa", 300),
  new Release("Farmácia", "despesa", 10)
]
const balanceApril = calculateBalance("Abril", balanceMarch.balance, aprilReleases)

console.log(balanceApril)

// maio
const mayReleases = [
  new Release("Salário", "receita", 4000),
  new Release("Aluguel", "despesa", 1000),
  new Release("Conta de Energia", "despesa", 200),
  new Release("Conta de Água", "despesa", 100),
  new Release("Internet", "despesa", 100),
  new Release("Transporte", "despesa", 300),
  new Release("Lazer", "despesa", 300),
  new Release("Alimentação", "despesa", 500),
  new Release("Condomínio", "despesa", 300),
  new Release("Farmácia", "despesa", 10)
]
const balanceMay = calculateBalance("Maio", balanceApril.balance, mayReleases)

console.log(balanceMay)

//junho
const juneReleases = [
  new Release("Salário", "receita", 4000),
  new Release("Aluguel", "despesa", 1000),
  new Release("Conta de Energia", "despesa", 200),
  new Release("Conta de Água", "despesa", 100),
  new Release("Internet", "despesa", 100),
  new Release("Transporte", "despesa", 300),
  new Release("Lazer", "despesa", 300),
  new Release("Alimentação", "despesa", 500),
  new Release("Condomínio", "despesa", 300),
  new Release("Farmácia", "despesa", 10)
]
const balanceJune = calculateBalance("Junho", balanceApril.balance, juneReleases)

console.log(balanceJune)

// julho
const julyReleases = [
  new Release("Salário", "receita", 4000),
  new Release("Aluguel", "despesa", 1000),
  new Release("Conta de Energia", "despesa", 200),
  new Release("Conta de Água", "despesa", 100),
  new Release("Internet", "despesa", 100),
  new Release("Transporte", "despesa", 300),
  new Release("Lazer", "despesa", 300),
  new Release("Alimentação", "despesa", 500),
  new Release("Condomínio", "despesa", 300),
  new Release("Farmácia", "despesa", 10)
]
const balanceJuly = calculateBalance("Julho", balanceJune.balance, julyReleases)

console.log(balanceJuly)

// agosto
const augustReleases = [
  new Release("Salário", "receita", 4000),
  new Release("Aluguel", "despesa", 1000),
  new Release("Conta de Energia", "despesa", 200),
  new Release("Conta de Água", "despesa", 100),
  new Release("Internet", "despesa", 100),
  new Release("Transporte", "despesa", 300),
  new Release("Lazer", "despesa", 300),
  new Release("Alimentação", "despesa", 500),
  new Release("Condomínio", "despesa", 300),
  new Release("Farmácia", "despesa", 10)
]
const balanceAugust = calculateBalance("Agosto", balanceJuly.balance, augustReleases)

console.log(balanceAugust)

// setembro
const septemberReleases = [
  new Release("Salário", "receita", 4000),
  new Release("Aluguel", "despesa", 1000),
  new Release("Conta de Energia", "despesa", 200),
  new Release("Conta de Água", "despesa", 100),
  new Release("Internet", "despesa", 100),
  new Release("Transporte", "despesa", 300),
  new Release("Lazer", "despesa", 300),
  new Release("Alimentação", "despesa", 500),
  new Release("Condomínio", "despesa", 300),
  new Release("Farmácia", "despesa", 10)
]
const balanceSeptember = calculateBalance("Setembro", balanceAugust.balance, septemberReleases)

console.log(balanceSeptember)

// outubro
const octoberReleases = [
  new Release("Salário", "receita", 4000),
  new Release("Aluguel", "despesa", 1000),
  new Release("Conta de Energia", "despesa", 200),
  new Release("Conta de Água", "despesa", 100),
  new Release("Internet", "despesa", 100),
  new Release("Transporte", "despesa", 300),
  new Release("Lazer", "despesa", 300),
  new Release("Alimentação", "despesa", 500),
  new Release("Condomínio", "despesa", 300),
  new Release("Farmácia", "despesa", 10)
]
const balanceOctober = calculateBalance("Outubro", balanceSeptember.balance, octoberReleases)

console.log(balanceOctober)

// novembro
const novemberReleases = [
  new Release("Salário", "receita", 4000),
  new Release("Aluguel", "despesa", 1000),
  new Release("Conta de Energia", "despesa", 200),
  new Release("Conta de Água", "despesa", 100),
  new Release("Internet", "despesa", 100),
  new Release("Transporte", "despesa", 300),
  new Release("Lazer", "despesa", 300),
  new Release("Alimentação", "despesa", 500),
  new Release("Condomínio", "despesa", 300),
  new Release("Farmácia", "despesa", 10)
]
const balanceNovember = calculateBalance("Novembro", balanceOctober.balance, novemberReleases)

console.log(balanceNovember)

// dezembro
const decemberReleases = [
  new Release("Salário", "receita", 4000),
  new Release("Aluguel", "despesa", 1000),
  new Release("Conta de Energia", "despesa", 200),
  new Release("Conta de Água", "despesa", 100),
  new Release("Internet", "despesa", 100),
  new Release("Transporte", "despesa", 300),
  new Release("Lazer", "despesa", 300),
  new Release("Alimentação", "despesa", 500),
  new Release("Condomínio", "despesa", 300),
  new Release("Farmácia", "despesa", 10)
]
const balanceDecember = calculateBalance("Dezembro", balanceNovember.balance, decemberReleases)

console.log(balanceDecember)

//acumulado do ano
const balanceYear = balanceDecember
console.log(`Ano => ${balanceYear}`)