"use strict";

function solveEquation(a, b, c) {
    let arr = [];
    let d = b ** 2 - 4 * a * c;
    let rootOfEquation, secondRootOfEquation;
    if (d > 0) {
        rootOfEquation = (-b + Math.sqrt(d)) / (2 * a);
        secondRootOfEquation = (-b - Math.sqrt(d)) / (2 * a);
        arr.push(rootOfEquation, secondRootOfEquation);
    } else if (d === 0) {
        rootOfEquation = -b / (2 * a);
        arr.push(rootOfEquation);
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    percent = (percent / 100) / 12;
    let S = amount - contribution;
    let payment = S * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
    let totalAmount = payment * countMonths;
    totalAmount = totalAmount.toFixed(2);
    totalAmount = +totalAmount;
    return totalAmount;
}