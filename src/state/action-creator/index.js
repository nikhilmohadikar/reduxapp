export const DepositeMoney = (amount) => {
    return (dispach) => {
        dispach({
            type: "deposit",
            payload: amount
        })
    }
}

export const WithdrawMoney = (amount) => {
    return (dispach) => {
        dispach({
            type: "withdraw",
            payload: amount
        })
    }
}