var modul = {
    array: [],
    push: function(num) {this.array.push(num)},
    pop: function() {this.array.pop()},
    findNum: function(num) { 
        let have = false;
        this.array.forEach( element => {if(num == element) have = true});
        return have;
    },
    sumAllNum: function() {return this.array.reduce(( previousValue, currentItem ) => previousValue += currentItem)},
    sumAllNumModul: function() {return this.array.reduce(( previousValue, currentItem ) => {
                        (currentItem > 0) ?  previousValue += currentItem : previousValue += -currentItem;
                        return previousValue;
                    }, 0)},
    allIsPositiveNum: function() {return this.array.every( element => element > 0)},
    evenNum: function() {return this.array.filter( element => {
                    if(!(element % 2)) return element
            })},
    multiplyByParam: function(num) {return this.array.map( currentItem => currentItem * num)},
    pushNum: function(num) { if (typeof(num) !== 'number' && !isFinite(num)) return "Введите число";
                    this.array.push(num)},
    leaveOnlyNumbers: function() {
        let temporaryArr = this.array.slice(0);
        this.array.length = 0;
        temporaryArr.forEach( element => {
            if (typeof(element) === 'number' && isFinite(element)) this.array.push(element);
        })        
    }
}


modul.push(95);
modul.push(55);
modul.push(-56);
modul.push(-56);
modul.push(-70);
modul.pop();
console.log(modul.array);
console.log('Поиск числа в массиве вернул ' + modul.findNum(57));
console.log('Сумма чисел в массиве ' + modul.sumAllNum());
console.log('Сумма чисел в массиве по модулю равна ' + modul.sumAllNumModul());
console.log('Проверка массива на состав только из положительных чисел вернула ' + modul.allIsPositiveNum());
console.log('Чётные числа в массиве ' + modul.evenNum());
console.log('Массив чисел умноженных на переданный параметр: ' + modul.multiplyByParam(-1.5));
console.log(modul.pushNum('e'));
modul.push('Строка');
console.log(modul.array);
modul.leaveOnlyNumbers();
console.log(modul.array);

