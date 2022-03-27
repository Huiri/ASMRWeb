import React from 'react';
import '../styles/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../Reducer';
import {useNavigate} from 'react-router-dom';

const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue();
    const history = useNavigate();
    return (
        <div className='subtotal'>
            <h1>장바구니 총합</h1>
            <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                    총액 ( {basket.length} items) : <strong>{value}원</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox"/> 체크박스 입니다.
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandsSeparator={true}
            prefix={"W"}
            />
            <button onClick={e => history('/payment')
}>결제하기</button>
        </div>
    );
};

export default Subtotal;