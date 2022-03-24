export const initialState = {
    basket : [],
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0)
    // reduce메소드는 배열의 모든 요소에 대해서 지정된 callback함수 호출
    //amount 초기값 및 앞으로 축적될 값이 저장될 인수, 0은 처음값, 
    // item 현재 아이템의 속성(장바구니 아이템의 가격), reduce 배열의 모든 값을 합산할 때사용


const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET': 
            return {
                ...state,
                basket:[...state.basket, action.item],
            };  
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if(index >= 0){
                newBasket.splice(index, 1)
                //splice(제거할 인덱스번호, 제거할 갯수) 원본 배열을 바꾸는데 사용
            } else {
                console.warn(`(id ${action.id})가 장바구니에 존재하지 않습니다`)
            }
            return {
                ...state,
                basket : newBasket
            } 
        default :
            return state;
    }
}
export default reducer;