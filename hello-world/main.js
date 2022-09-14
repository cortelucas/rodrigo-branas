function roundValue(value) {
  return Math.round(value * 100) / 100
}

function calculateInterest(value) {
  const interest = roundValue(value * 0.1)

  return interest
}

function calculateIncome(value) {
  const income = roundValue(value * 0.005)

  return income
}

function calculateBalance(mount, previousBalance, releases) {
  console.log(mount)
  let balance = previousBalance

  releases.forEach(({ type, value }) => {
    if (type === 'receita') {
      balance += value
    }
    if (type === 'despesa') {
      balance -= value
    }
  })

  if (balance < 0) {
    const interest = calculateInterest(balance)
    balance = roundValue(balance + interest)
  } else {
    const income = calculateIncome(balance)
    balance = roundValue(balance + income)
  }

  return balance
}

// janeiro
const januaryReleases = [
  { category: "Salário", type: "receita", value: 3000 },
  { category: "Aluguel", type: "despesa", value: 1000 },
  { category: "Conta de Energia", type: "despesa", value: 200 },
  { category: "Conta de Água", type: "despesa", value: 100 },
  { category: "Internet", type: "despesa", value: 100 },
  { category: "Transporte", type: "despesa", value: 300 },
  { category: "Lazer", type: "despesa", value: 300 },
  { category: "Alimentação", type: "despesa", value: 500 },
  { category: "Condomínio", type: "despesa", value: 300 },
  { category: "Farmácia", type: "despesa", value: 100 }
]
const balanceJanuary = calculateBalance("Janeiro", 0, januaryReleases)

console.log(balanceJanuary)

// fevereiro
const februaryReleases = [
  { category: "Salário", type: "receita", value: 3000 },
  { category: "Aluguel", type: "despesa", value: 1000 },
  { category: "Conta de Energia", type: "despesa", value: 200 },
  { category: "Conta de Água", type: "despesa", value: 100 },
  { category: "Internet", type: "despesa", value: 100 },
  { category: "Transporte", type: "despesa", value: 300 },
  { category: "Lazer", type: "despesa", value: 300 },
  { category: "Alimentação", type: "despesa", value: 500 },
  { category: "Condomínio", type: "despesa", value: 300 },
  { category: "Farmácia", type: "despesa", value: 100 }
]
const balanceFebruary = calculateBalance("Fevereiro", balanceJanuary, februaryReleases)

console.log(balanceFebruary)

// março
const marchReleases = [
  { category: "Salário", type: "receita", value: 4000 },
  { category: "Aluguel", type: "despesa", value: 1000 },
  { category: "Conta de Energia", type: "despesa", value: 200 },
  { category: "Conta de Água", type: "despesa", value: 100 },
  { category: "Internet", type: "despesa", value: 100 },
  { category: "Transporte", type: "despesa", value: 300 },
  { category: "Lazer", type: "despesa", value: 300 },
  { category: "Alimentação", type: "despesa", value: 500 },
  { category: "Condomínio", type: "despesa", value: 300 },
  { category: "Farmácia", type: "despesa", value: 100 }
]
const balanceMarch = calculateBalance("Março", balanceFebruary, marchReleases)

console.log(balanceMarch)

// abril
const aprilReleases = [
  { category: "Salário", type: "receita", value: 4000 },
  { category: "Aluguel", type: "despesa", value: 1000 },
  { category: "Conta de Energia", type: "despesa", value: 200 },
  { category: "Conta de Água", type: "despesa", value: 100 },
  { category: "Internet", type: "despesa", value: 100 },
  { category: "Transporte", type: "despesa", value: 300 },
  { category: "Lazer", type: "despesa", value: 300 },
  { category: "Alimentação", type: "despesa", value: 500 },
  { category: "Condomínio", type: "despesa", value: 300 },
  { category: "Farmácia", type: "despesa", value: 100 }
]
const balanceApril = calculateBalance("Abril", balanceMarch, aprilReleases)

console.log(balanceApril)

// maio
const mayReleases = [
  { category: "Salário", type: "receita", value: 4000 },
  { category: "Aluguel", type: "despesa", value: 1000 },
  { category: "Conta de Energia", type: "despesa", value: 200 },
  { category: "Conta de Água", type: "despesa", value: 100 },
  { category: "Internet", type: "despesa", value: 100 },
  { category: "Transporte", type: "despesa", value: 300 },
  { category: "Lazer", type: "despesa", value: 300 },
  { category: "Alimentação", type: "despesa", value: 500 },
  { category: "Condomínio", type: "despesa", value: 300 },
  { category: "Farmácia", type: "despesa", value: 100 }
]
const balanceMay = calculateBalance("Maio", balanceApril, mayReleases)

console.log(balanceMay)

//junho
const juneReleases = [
  { category: "Salário", type: "receita", value: 4000 },
  { category: "Aluguel", type: "despesa", value: 1000 },
  { category: "Conta de Energia", type: "despesa", value: 200 },
  { category: "Conta de Água", type: "despesa", value: 100 },
  { category: "Internet", type: "despesa", value: 100 },
  { category: "Transporte", type: "despesa", value: 300 },
  { category: "Lazer", type: "despesa", value: 300 },
  { category: "Alimentação", type: "despesa", value: 500 },
  { category: "Condomínio", type: "despesa", value: 300 },
  { category: "Farmácia", type: "despesa", value: 100 }
]
const balanceJune = calculateBalance("Junho", balanceApril, juneReleases)

console.log(balanceJune)

// julho
const julyReleases = [
  { category: "Salário", type: "receita", value: 4000 },
  { category: "Aluguel", type: "despesa", value: 1000 },
  { category: "Conta de Energia", type: "despesa", value: 200 },
  { category: "Conta de Água", type: "despesa", value: 100 },
  { category: "Internet", type: "despesa", value: 100 },
  { category: "Transporte", type: "despesa", value: 300 },
  { category: "Lazer", type: "despesa", value: 300 },
  { category: "Alimentação", type: "despesa", value: 500 },
  { category: "Condomínio", type: "despesa", value: 300 },
  { category: "Farmácia", type: "despesa", value: 100 }
]
const balanceJuly = calculateBalance("Julho", balanceJune, julyReleases)

console.log(balanceJuly)

// agosto
const augustReleases = [
  { category: "Salário", type: "receita", value: 4000 },
  { category: "Aluguel", type: "despesa", value: 1000 },
  { category: "Conta de Energia", type: "despesa", value: 200 },
  { category: "Conta de Água", type: "despesa", value: 100 },
  { category: "Internet", type: "despesa", value: 100 },
  { category: "Transporte", type: "despesa", value: 300 },
  { category: "Lazer", type: "despesa", value: 300 },
  { category: "Alimentação", type: "despesa", value: 500 },
  { category: "Condomínio", type: "despesa", value: 300 },
  { category: "Farmácia", type: "despesa", value: 100 }
]
const balanceAugust = calculateBalance("Agosto", balanceJuly, augustReleases)

console.log(balanceAugust)

// setembro
const septemberReleases = [
  { category: "Salário", type: "receita", value: 4000 },
  { category: "Aluguel", type: "despesa", value: 1000 },
  { category: "Conta de Energia", type: "despesa", value: 200 },
  { category: "Conta de Água", type: "despesa", value: 100 },
  { category: "Internet", type: "despesa", value: 100 },
  { category: "Transporte", type: "despesa", value: 300 },
  { category: "Lazer", type: "despesa", value: 300 },
  { category: "Alimentação", type: "despesa", value: 500 },
  { category: "Condomínio", type: "despesa", value: 300 },
  { category: "Farmácia", type: "despesa", value: 100 }
]
const balanceSeptember = calculateBalance("Setembro", balanceAugust, septemberReleases)

console.log(balanceSeptember)

// outubro
const octoberReleases = [
  { category: "Salário", type: "receita", value: 4000 },
  { category: "Aluguel", type: "despesa", value: 1000 },
  { category: "Conta de Energia", type: "despesa", value: 200 },
  { category: "Conta de Água", type: "despesa", value: 100 },
  { category: "Internet", type: "despesa", value: 100 },
  { category: "Transporte", type: "despesa", value: 300 },
  { category: "Lazer", type: "despesa", value: 300 },
  { category: "Alimentação", type: "despesa", value: 500 },
  { category: "Condomínio", type: "despesa", value: 300 },
  { category: "Farmácia", type: "despesa", value: 100 }
]
const balanceOctober = calculateBalance("Outubro", balanceSeptember, octoberReleases)

console.log(balanceOctober)

// novembro
const novemberReleases = [
  { category: "Salário", type: "receita", value: 4000 },
  { category: "Aluguel", type: "despesa", value: 1000 },
  { category: "Conta de Energia", type: "despesa", value: 200 },
  { category: "Conta de Água", type: "despesa", value: 100 },
  { category: "Internet", type: "despesa", value: 100 },
  { category: "Transporte", type: "despesa", value: 300 },
  { category: "Lazer", type: "despesa", value: 300 },
  { category: "Alimentação", type: "despesa", value: 500 },
  { category: "Condomínio", type: "despesa", value: 300 },
  { category: "Farmácia", type: "despesa", value: 100 }
]
const balanceNovember = calculateBalance("Novembro", balanceOctober, novemberReleases)

console.log(balanceNovember)

// dezembro
const decemberReleases = [
  { category: "Salário", type: "receita", value: 4000 },
  { category: "Aluguel", type: "despesa", value: 1000 },
  { category: "Conta de Energia", type: "despesa", value: 200 },
  { category: "Conta de Água", type: "despesa", value: 100 },
  { category: "Internet", type: "despesa", value: 100 },
  { category: "Transporte", type: "despesa", value: 300 },
  { category: "Lazer", type: "despesa", value: 300 },
  { category: "Alimentação", type: "despesa", value: 500 },
  { category: "Condomínio", type: "despesa", value: 300 },
  { category: "Farmácia", type: "despesa", value: 100 }
]
const balanceDecember = calculateBalance("Dezembro", balanceNovember, decemberReleases)

console.log(balanceDecember)

//acumulado do ano
const balanceYear = balanceDecember
console.log(`Ano => ${balanceYear}`)