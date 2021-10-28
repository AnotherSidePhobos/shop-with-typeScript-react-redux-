export const IsExistInCart = (itemsInCart, item) => {
    const existingCartItem = itemsInCart.find(
        itemsInCart => itemsInCart.id === item.id
    );
    if (existingCartItem) {
        return itemsInCart.map(itemsInCart => 
            itemsInCart.id === item.id
            ? { ...itemsInCart, count: itemsInCart.count + 1}
            : itemsInCart
        );
      }

      return[
          ...itemsInCart,
          {
              ...item,
              count: 1
          }
      ];
} 