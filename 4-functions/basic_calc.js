// Program with four basic arithmetical operations: addition, subtraction, multiplication and division. 

const calculate = (a, op, b) => {
    if (op == "+")
        return (a + b);
    else if (op == "-")
        return (a - b);
    else if (op == "*")
        return (a * b);
    else if (op == "/")
        return (a / b);
};

calculate(4, "+", 6)
calculate(4, "-", 6)
calculate(2, "*", 0)
calculate(12, "/", 0)
