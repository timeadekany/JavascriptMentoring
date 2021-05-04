const inputList = [-1 , 0, "a", 1, 100, 2000, "*"];

statisticsGenerator = (inputList) =>  {

    let statisticsParameters = {
        min: Number.MAX_VALUE,
        max: Number.MIN_VALUE,
        sum: 0,
        avg: 0
     };

    let numberOfTheNumbers = 0;

    if ( Array.isArray(inputList) && inputList.length !== 0 ) {
    let numberCounter = 0;
        for(let i = 0; i <= inputList.length; i++) {
            if (typeof inputList[i] === "number") {
                numberCounter++;
                if (statisticsParameters.min > inputList[i]) {
                    statisticsParameters.min = inputList[i];
                } 
                if (statisticsParameters.max < inputList[i]) {
                    statisticsParameters.max = inputList[i];
                }
                statisticsParameters.sum+= inputList[i];
            } 
        }
        if (numberCounter === 0) {
            return console.log("The list does not contain any number");
        }
        statisticsParameters.avg = statisticsParameters.sum / numberCounter;
        return statisticsParameters;
    } else {
        return console.log("The input is not valid!");
    }
}

console.log(statisticsGenerator(inputList));
