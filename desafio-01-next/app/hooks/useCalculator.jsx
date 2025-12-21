import { useState } from "react";

const useCalculator = () => {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');

    const handleAddNumber = (number) => {
        setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
    }

// Limpar tudo (C)
    const handleClear = () => {
        setCurrentNumber('0');
        setFirstNumber('0');
        setOperation('');
    }

// Apaga o último dígito (CE)
    const handleBackspace = () => {
        setCurrentNumber(prev => {
            const result = prev.slice(0, - 1);
            return result === '' ? '0' : result;
        });
    }

// Operação de Soma
    const handleSumNumbers = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0');
            setOperation('+');
        } else {
            const sum = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(sum));
            setOperation('');
            setFirstNumber('0');
        }
    }

// Operação de Subtração
    const handleMinusNumbers = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0');
            setOperation('-');
        } else {
            const minus = Number(firstNumber) - Number(currentNumber);
            setCurrentNumber(String(minus));
            setOperation('');
            setFirstNumber('0');
        }
    }

// Operação de Multiplicação
    const handleMultiplyNumbers = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0');
            setOperation('*');
        } else {
            const multiply = Number(firstNumber) * Number(currentNumber);
            setCurrentNumber(String(multiply));
            setOperation('');
            setFirstNumber('0');
        }
    }

// Operação de Divisão
    const handleDivideNumbers = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0');
            setOperation('/');
        } else {
            let divide;
            if (currentNumber === '0') {
                divide = 'Error: Divide by 0';
                setCurrentNumber(divide);
            } else {
                divide = Number(firstNumber) / Number(currentNumber);
                setCurrentNumber(String(divide));
            }
            setOperation('');
            setFirstNumber('0');
        }
    }

// Realiza a operação (=)
    const handleEquals = () => {
        if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
            switch (operation) {
                case '+':
                    handleSumNumbers();
                    break;
                case '-':
                    handleMinusNumbers();
                    break;
                case '*':
                    handleMultiplyNumbers()
                    break;
                case '/':
                    handleDivideNumbers()
                    break;
                default:
                    break;
            }
        }
    }

    return {
        currentNumber,
        handleAddNumber,
        handleClear,
        handleBackspace,
        handleSumNumbers,
        handleMinusNumbers,
        handleMultiplyNumbers,
        handleDivideNumbers,
        handleEquals
    };
}

export default useCalculator;