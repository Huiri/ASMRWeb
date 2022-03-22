import React from 'react';
import '../styles/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
const Subtotal = () => {
    return (
        <div className='subtotal'>
            <h1>장바구니 총합</h1>
            <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                    총액 ( 0 items) : <strong>0원</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox"/> 체크박스 입니다.
                </small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandsSeparator={true}
            prefix={"W"}
            />
            <button>결제하기</button>
        </div>
    );
};

export default Subtotal;