const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const {getCircleArea, getSquareArea} = require('./mathUtil');
const {logFigureError, logInput, logResult} = require('./log');

// 같은 스트림에 콜백쓰니깐 rl.close를 공통화하기가 좀
rl.question("원하는 도형을 작성해주세요(정사각형, 원) : ", figure =>
{
    console.log(`선택한 도형 ${figure}`);

    switch(figure)
    {
        case "정사각형":
            rl.question("변의길이를 입력해주세요. : ", input => {
                console.log(logInput(input));
                console.log(logResult(figure, getSquareArea(input)));
                rl.close();

            })

            break;

        case "원":
            rl.question("반지름의 길이를 입력하세요. : ", input => {
                console.log(`입력받은 값 ${input}`);
                console.log(logResult(figure, getCircleArea(input)));
                rl.close();

            })

            break;
        default:
            console.log(logFigureError);
            rl.close();
            break;
    }


})