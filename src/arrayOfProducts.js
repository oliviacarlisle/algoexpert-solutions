function arrayOfProducts(array) {
    const output = [];
    
    // populate output array from left to right
    let product = 1;
    for (let i = 0; i < array.length; i++) {
      output.push(product);
      product *= array[i];
    }
    
    // populate output array from right to left
    product = 1;
    for (let i = array.length - 1; i >= 0; i--) {
      output[i] *= product;
      product *= array[i];
    }
    
    return output;
}