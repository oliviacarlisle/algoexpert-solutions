function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {

    redShirtSpeeds.sort((a, b) => b - a);
    
    if (fastest) blueShirtSpeeds.sort((a, b) => a - b);
    else blueShirtSpeeds.sort((a, b) => b - a);
  
    let sum = 0;
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      sum += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
    }
    
    return sum;
}