function calculatorSum(sum1,sum2,operator){
    let result = 0;
    switch(operator){
        case "+":
            result = sum1+sum2;
            break;
        case "-":
            result = sum1-sum2;
            break;
            case "*":
                result = sum1*sum2;
                break;
                case "/":
                    result = sum1/sum2;
                    break;
                    default:
                        throw new Error("Invalid Operator");
    }
    return result;
}
console.log(calculatorSum(10,20,"+"))