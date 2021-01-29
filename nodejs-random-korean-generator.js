const hangul = require('hangul-js');
const 자음 = [  // 사실 ㅇ은 자음은 아니지만 여기에는 그렇다 침
	'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
	'ㄲ', 'ㅃ', 'ㅉ', 'ㄸ', 'ㅆ'
];

const 모음 = [
	'ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ', 'ㅟ', 'ㅙ', 'ㅞ', 'ㅚ', 'ㅝ', 'ㅘ'
];

const 받침 = [
	'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
	'ㄲ', 'ㅆ', ''
];

var ret = ''; for(i=0; i<100; i++) {
	ret += hangul.assemble([
		자음[ Math.floor(Math.random() * 자음.length) ],
		모음[ Math.floor(Math.random() * 모음.length) ],
		받침[ Math.floor(Math.random() * 받침.length) ],
	]);
}

console.log(ret);
