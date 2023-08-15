let age = 25;

// console.log(age === 25);
// console.log(age === '25');
// console.log(age == '25');

// switch문
let score = 60;

// if (score === 100){
//     console.log('A입니다.');
// }else if (score === 80){
//     console.log('B입니다.');
// }else {
//     console.log('그외입니다.');
// }

let category = 1;

function Category(category) {
	switch (category) {
        case 0:
            console.log('A입니다.');
            break;
        case 1:
            console.log('B입니다.');
            break;
        case 2:
            console.log('C입니다.');
            break;
    }
}

