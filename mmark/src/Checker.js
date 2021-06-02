const Checker = ({type, input, answer}) => {
    // if type is input, checkAnswer is array of string 
    switch (type) {
        case "Play":
            var arr = [];
            for (let k = 0; k < answer.length; k++){
                var correct = 0;
                for (let i = 0; i < input.length; i++) {
                    if (input[i]!==answer[k][i]){
                        if (input[input.length-1]===answer[k][0]){correct=1; break;}
                        correct=0; break;
                    }
                    correct++;
                }
                arr.push(correct);
            }
            console.log(arr);
            if (Math.max(...arr) < input.length) document.querySelector('.ProgressBarWrapper').classList.add('Wrong');
            return Math.max(...arr);
            
        case "Equal":
            return false;
        case "Input":
            for (let i = 0; i < answer.length; i++) {
                if (input[input.length - 1].toLowerCase() === answer[i].toLowerCase()) {
                    return 1;
                }
            }
            document.querySelector('.ProgressBarWrapper').classList.add('Wrong');           
            return 0;
        default: 
            return false;
    }
};

export default Checker;