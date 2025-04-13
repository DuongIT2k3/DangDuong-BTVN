const orders = [
    { id: 1, amount: 100, date: "2025-04-01", status: "completed" },
    { id: 2, amount: 200, date: "2025-04-02", status: "pending" },
    { id: 3, amount: 150, date: "2025-04-03", status: "completed" },
    { id: 4, amount: 300, date: "2025-04-04", status: "shipped" },
    { id: 5, amount: 50, date: "2025-04-05", status: "cancelled" },
    { id: 6, amount: 120, date: "2025-04-06", status: "completed" },
    { id: 7, amount: 180, date: "2025-04-07", status: "shipped" },
    { id: 8, amount: 220, date: "2025-04-08", status: "pending" },
    { id: 9, amount: 350, date: "2025-04-09", status: "completed" },
    { id: 10, amount: 500, date: "2025-04-10", status: "completed" },
];

function calculateTotalCompletedAmount(arr, amount){
    const filterOrders = arr.filter(order => order.status ==="completed" && order.amount > amount);

    if(filterOrders.length === 0 ){
        return [];
    }
    const total = filterOrders.reduce((acc, order) => acc + order.amount,0);
    return total
}

const result = calculateTotalCompletedAmount(orders, 150);
console.log(result); 

const result2 = calculateTotalCompletedAmount(orders, 100);
console.log(result2); 