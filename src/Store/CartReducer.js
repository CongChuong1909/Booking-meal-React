import { ADD_ITEM_CART, REMOVE_ITEM_CART } from "./Constants";

export const initialCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM_CART:
            //// dùng concat để tạo ra một mảng mới và add phần tử vào và không add trực tiếp vào mảng cũ
            //// dùng phương thức push trong trường hợp này sẽ xảy ra lỗi
            const updatedTotalAmount =
                state.totalAmount +
                action.payload.price * action.payload.amount;

            ///check xem đã có sản phẩm trùng trong giỏ hàng hay chưa
            const existingCartItemIndex = state.items.findIndex((item) => {
                return item.id === action.payload.id;
            });
            // console.log(existingCartItemIndex);
            const existingCartItem = state.items[existingCartItemIndex];
            let upItems;

            if (existingCartItem) {
                const upItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.payload.amount,
                };

                upItems = [...state.items];
                upItems[existingCartItemIndex] = upItem;
            } else {
                upItems = state.items.concat(action.payload);
            }

            return {
                items: upItems,
                totalAmount: updatedTotalAmount,
            };

        case REMOVE_ITEM_CART:
            const existingCartItemIndexRemove = state.items.findIndex(
                (item) => item.id === action.payload,
            );
            ////lấy ra phần tử cần xóa
            const existingItemRemove = state.items[existingCartItemIndexRemove];
            ////trừ tiền của tổng số tiền khi số lượng giảm
            const updatedTotalAmountRemove =
                state.totalAmount - existingItemRemove.price;
            let updatedItems;

            if (existingItemRemove.amount === 1) {
                /// sản phẩm cuối
                ///filter:: trả về một mảng các phần tử có điều kiện trong return
                updatedItems = state.items.filter(
                    (item) => item.id !== action.payload,
                );
            } else {
                ///nếu không phải sản phẩm cuối
                const updatedItem = {
                    ...existingItemRemove, //// bảo lưu phần tử đó lại
                    amount: existingItemRemove.amount - 1, //// lấy số lượng trừ 1
                };
                console.log(updatedItems);
                updatedItems = [...state.items];
                console.log(updatedItems);
                updatedItems[existingCartItemIndexRemove] = updatedItem;
                console.log(updatedItems);
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmountRemove,
            };
        default:
            throw new Error("Invalid action!");
    }
};
export default cartReducer;
