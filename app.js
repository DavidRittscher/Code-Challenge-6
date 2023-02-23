// !Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
let arrayTest = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

arrayTest.sort();
const cleanHouse = (array) => {
    let newThread = [];
    let temp = [array[0]];
    for (let n = 1; n <= array.length; n++) {
        if (array[n] === array[n - 1]) {
            temp.push(array[n - 1])

        } else {
            if (temp.length > 1) {
                newThread.push([...temp])

            } else {
                newThread.push(temp[0])
            }
            temp = [array[n]]
        }
        if (temp.length > 1) {
            newThread.push([...temp])
        } else {
            newThread.push(temp[0])
        }
    }
}
cleanHouse(arrayTest)

// !Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4) should return [1,3]
//two sum problem Version 1
const twoSum = (num, target) => {
    let sums = []
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] === target) {
                sums.push([num[i], num[j]]);
            }

        }
    }
    return sums
}
//*Version 2
const newTwoSum = (arg, target) => {
    let sum = [];
    let hashTable = {};
    for (let i = 0; i < arg.length; i++) {
        let sumMinusNum = target - arg[i];
        if (hashTable[sumMinusNum.toString()] !== undefined) {
            sum.push([arg[i], sumMinusNum])
        }
        hashTable[arg[i].toString()] = arg[i]

    }
    return sum
}

// !Question 3: Write a function that converts HEX to RGB. Then Make that function autodetect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX. Bonus: Release this tool as a npm package.

const changeColor = (color) => {
    if (color[0] !== '#') {
        //convert rgb to hex
        let rgb = color.replace('rgb(', '').replace(')', '').split(',');
        let red = parseInt(rgb[0]).toString(16);
        let green = parseInt(rgb[1]).toString(16);
        let blue = parseInt(rgb[2]).toString(16);
        return `#${red}${green}${blue}`
    } else {

        let hex = color.replace('#', '');
        let red = color[1] + color[2];
        let green = color[3] + color[4];
        let blue = color[5] + color[6];
        return `rgb(${parseInt(red, 16)}, ${parseInt(green, 16)}, ${parseInt(blue, 16)})`

    }
}

