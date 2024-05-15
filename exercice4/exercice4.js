const filterList = (list) => {
    return list.filter(item => typeof item === 'number');
}


console.log(filterList([1, 2, 'a', 'b'])); // -> [1, 2]
console.log(filterList([1, 'a', 'b', 0, 15])); // -> [1, 0, 15]
console.log(filterList([1, 2, 'aasf', '3', '124', 123])); // -> [1, 2, 123]