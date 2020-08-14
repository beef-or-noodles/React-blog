/**
 * Created by Administrator on 2020/8/14.
 */
export const ADD_CART = "ADD_TO_CART";
export function addToCart(product,quantity,unitCost){
    return {
        type:ADD_CART,
        payload:{product,quantity,unitCost}
    }
}