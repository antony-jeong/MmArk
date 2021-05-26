const Checker = ({type, input, answer}) => {
    // if type is input, checkAnswer is array of string 
    switch (type) {
        case "Play":
            if (input.length >= answer.length) {
                inputSuffix = input.slice(input.length-answer.length,input.length)
                for (let i = 0; i < answer.length; i++) {
                    if (inputSuffix[i] !== answer[i]) {
                        return false;
                    }
                }
                return true;
            }
            return false
        case "Equal":
            return false;
        case "Input":
            for (let i = 0; i < answer.length; i++) {
                if (input.toLowerCase() === answer[i].toLowerCase()) {
                    return true;
                }
            }
            return false;
        default: 
            return false;
    }
};

export default Checker;