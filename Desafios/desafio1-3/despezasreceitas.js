const users = [
    {
        name: "Salvio",
        revenue: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: "Marcio",
        revenue: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: "Lucio",
        revenue: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
]

function sumNumbers (numbers) {
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
    }
    return sum
}

function balanceCalculator (revenue, expenses) {
    const totalRevenue = sumNumbers(revenue)
    const totalExpenses = sumNumbers(expenses)

    return totalRevenue - totalExpenses
}

for( let user of users ) {
    const balance = balanceCalculator(user.revenue, user.expenses)

    if(balance > 0) {
        console.log(`${user.name} possui saldo POSITIVO de ${balance.toFixed(2)}`)
    } else {
        console.log(`${user.name} possui saldo NEGATIVO de ${balance.toFixed(2)}`)
    }
}

