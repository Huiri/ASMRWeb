import React from 'react';
import '../styles/Payment.css';
import { useStateValue } from '../StateProvider';
import {useNavigate, Link} from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useNavigate();
    return (
        <div className="payment">
            <div className="payment_container">
                <Link to="/checkout" className="checkoutlink">
                    <h1>장바구니로 돌아가기 </h1>
                </Link>
                <h1>({basket?.length}개의 상품목록이 존재합니다.)</h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>배달 받을 장소</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}님의 주소</p>
                        <p>경기도</p>
                        <p>포천</p>
                    </div>
                </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>상품 목록</h3>
                </div>
                <div className="payment_item">
                    {basket.map(item => (
                            <CheckoutProduct id = {item.id} title = {item.title} image = {item.image} rating = {item.rating} price = {item.price}/>
                        ))}
                </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>결제</h3>
                </div>
                <div className="payment_details">
                    
                </div>
            </div>
        </div>
    );
};

export default Payment;