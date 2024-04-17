// 장바구니에 상품 추가하는 기능
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentNode;
        const productClone = product.cloneNode(true);
        const cart = document.querySelector('.cart-items');
        cart.appendChild(productClone);
    });
});

// 결제 기능 (여기에 결제 관련 로직 추가 가능)
const checkoutButton = document.querySelector('.checkout');

checkoutButton.addEventListener('click', () => {
    const cartItems = document.querySelectorAll('.cart .product');
    if (cartItems.length > 0) {
        alert('결제가 완료되었습니다!');
        // 여기에 추가적인 결제 처리 로직을 작성할 수 있습니다.
    } else {
        alert('장바구니가 비어 있습니다.');
    }
});

const cancelButton = document.querySelector('.cancel');

cancelButton.addEventListener('click', () => {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';  // 장바구니 내 모든 항목을 비웁니다.
    alert('결제가 취소되었습니다.');
});
