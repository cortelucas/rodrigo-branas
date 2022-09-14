export class Release {
  constructor(category, type, value) {
    if (type !== "receita" && type !== "despesa") {
      throw new Error("Lançamento inválido: o Tipo tem que ser receita ou despesa.")
    }
    if (value <= 0) {
      throw new Error("Lançamento inválido: Valor deve ser maior que zero.")
    }
    if (category === "" || category === null || category === undefined) {
      throw new Error("Lançamento inválido: A categoria é obrigatória.")
    }

    this.category = category
    this.type = type
    this.value = value
  }
}
