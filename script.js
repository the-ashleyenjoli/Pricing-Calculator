function calculatePrice() {
    const cost = parseFloat(document.getElementById('cost').value) || 0;
    const markup = parseFloat(document.getElementById('markup').value) || 0;
    const packaging = parseFloat(document.getElementById('packaging').value) || 0;
    const discount = parseFloat(document.getElementById('discount').value) || 0;

    let totalCost = cost + packaging;
    let price = totalCost + (totalCost * (markup / 100));
    let discountAmount = price * (discount / 100);
    let finalPrice = price - discountAmount;
    let roundedPrice = Math.round(finalPrice);

    let result = `
        <p><strong>Total Cost:</strong> $${totalCost.toFixed(2)}</p>
        <p><strong>Price Before Discount:</strong> $${price.toFixed(2)}</p>
        <p><strong>Discount:</strong> $${discountAmount.toFixed(2)}</p>
        <p><strong>Final Suggested Price:</strong> $${roundedPrice}</p>
        <p><strong>Profit:</strong> $${(roundedPrice - totalCost).toFixed(2)}</p>
    `;

    document.getElementById('result').innerHTML = result;
}