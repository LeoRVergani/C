const bankClients = [ 
    { name: 'César Nascimento', money: 4000 },
    { name: 'David Beckham', money: 9000},
    { name: 'Megan Fox', money: 10000}, 
];

const multiplyMoney = () => {
    console.log(
        bankClients.map((client) => {
            return { name: client.name, money: client.money * 2, id: index };
            
        }),
    );

};

console.log(bankClients)