function number(busStops) {
    return busStops.reduce((acc, [inbus, outbus]) => acc + inbus - outbus, 0);
}


console.log(number([[10, 0], [3, 5], [5, 8]])); 
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])); 
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]])); 
