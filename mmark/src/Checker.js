const Checker = ({type, input, answer}) => {
    // if type is input, checkAnswer is array of string 
    switch (type) {
        case "Play":
            var correct = 0;
            for (let i = 0; i < input.length; i++) {
                if (input[i]!==answer[i]){
                    document.querySelector('.ProgressBar').classList.add('Wrong');
                    if (input[i]===answer[0]) return 1;
                    return 0;
                }
                correct++;
            }
            return correct;
        case "Equal":
            return false;
        case "Input":
            for (let i = 0; i < answer.length; i++) {
                if (input[input.length - 1].toLowerCase() === answer[i].toLowerCase()) {
                    return 1;
                }
            }                
            return 0;
        default: 
            return false;
    }
};

export default Checker;