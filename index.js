let horasDormidas = 5

if (horasDormidas >= 12) {
  console.log("Uau! Você dormiu bastante, talvez até demais.")
} else if (horasDormidas >= 10) {
  console.log("Você dormiu muito bem, está renovado!")
} else if (horasDormidas >= 8) {
  console.log("Você dormiu bem!")
} else if (horasDormidas >= 7) {
  console.log("Sono razoável, está quase ideal.")
} else if (horasDormidas >= 6) {
  console.log("Sono razoável, mas poderia ser melhor.")
} else if (horasDormidas >= 5) {
  console.log("Você dormiu pouco, cuidado com o cansaço!")
} else if (horasDormidas >= 4) {
  console.log("Muito pouco sono, seu corpo precisa descansar mais.")
} else if (horasDormidas >= 3) {
  console.log("Sono insuficiente, isso pode afetar sua saúde.")
} else if (horasDormidas >= 2) {
  console.log("Dormir tão pouco é perigoso, tente se recuperar.")
} else if (horasDormidas >= 1) {
  console.log("Quase não dormiu, seu corpo está em alerta máximo.")
} else {
  console.log("Você não dormiu nada! Isso é extremamente prejudicial.")
}

if (horasDormidas < 6) {
  console.log("Sugestão: tente ir para cama mais cedo.")
  console.log("Evite cafeína à noite.")
  console.log("Crie uma rotina de sono consistente.")
} else if (horasDormidas >= 6 && horasDormidas < 8) {
  console.log("Sugestão: ajuste pequenos hábitos para melhorar a qualidade do sono.")
  console.log("Exemplo: desligue telas antes de dormir.")
} else if (horasDormidas >= 8 && horasDormidas <= 10) {
  console.log("Parabéns! Você está cuidando bem do seu descanso.")
  console.log("Continue mantendo essa rotina saudável.")
} else {
  console.log("Sono excessivo pode indicar cansaço acumulado ou problemas de saúde.")
  console.log("Se isso for frequente, considere consultar um médico.")
}

console.log("Lembre-se: dormir bem é essencial para produtividade e saúde!")

let sonoIdeal = 8
let deficit = sonoIdeal - horasDormidas

if (deficit > 0) {
  console.log("Você dormiu " + deficit + " horas a menos do que o ideal.")
} else if (deficit < 0) {
  console.log("Você dormiu " + (deficit * -1) + " horas a mais do que o ideal.")
} else {
  console.log("Você dormiu exatamente o ideal de sono!")
}


console.log("Cuide do seu sono, pois ele cuida de você meu chapa")
