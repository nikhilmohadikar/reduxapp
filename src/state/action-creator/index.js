export const DepositeMoney = (amount)=>{
    return (
        dispatch({
            type: "deposite",
            payload: amount
        })
    )
}

export const WithdrawMoney = (amount)=>{
    return (
        dispatch({
            type: "withdraw",
            payload: amount
        })
    )
}