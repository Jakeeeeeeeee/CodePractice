
const CalTax = (salary) => {
    const taxTable = [
        { min: 0, max: 18200, accumulate: 0, rate: 0},
        { min: 18201, max: 37000, accumulate: 0, rate: 0.19},
        { min: 37001, max: 90000, accumulate: 3572, rate: 0.325},
        { min: 90001, max: 180000, accumulate: 20797, rate: 0.37},
        { min: 180001, max: Number.POSITIVE_INFINITY, accumulate: 54096, rate: 0.45},
    ];

    const result = taxTable.find((row) => salary >row.min && salary < row.max);
    const {min, accumulate, rate} = result;
    const tax = (salary - min) * rate + accumulate;
    return tax;
}



CalTax(150000);





| Income thresholds  | Rate  | Tax payable on this income |
| ------------------ | ------ | -------------------------- |
| $0 – $18,200       | 0%    | Nil |
| $18,201 – $37,000  | 19%   | 19c for each $1 over $18,200 |
| $37,001 – $90,000  | 32.5% | $3,572 plus 32.5% of amounts over $37,000 |
| $90,001 – $180,000 | 37%   | $20,797 plus 37% of amounts over $90,000 |
| $180,001 and over  | 45%   | $54,096 plus 45% of amounts over $180,000 |