import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state';

const Shop = () => {
  const dispach = useDispatch();
  const { WithdrawMoney, DepositeMoney } = bindActionCreators(actionCreators, dispach)
  return (
    <div>
      <div className='container my-5'>
        <h2>Deposite / Withdraw Money</h2>
        {/* <div className="btn btn-primary mx-2" onClick={()=>{dispach(actionCreator.WithdrawMoney(100))}}>-</div>
                Update Balance
            <div className="btn btn-primary mx-2" onClick={()=>{dispach(actionCreator.DepositeMoney(100))}}>+</div> */}


        <div className="btn btn-primary mx-2" onClick={() => { WithdrawMoney(100) }}>-</div>
        Update Balance
        <div className="btn btn-primary mx-2" onClick={() => { DepositeMoney(100) }}>+</div>
      </div>
    </div>
  )
}

export default Shop
