const theseed = require('./theseed');
const client = theseed('alpha');

function print(prpt) {
	process.stdout.write(prpt + '\n');
}

client.on('ready', () => {
	client.login('gnote8_0', '비밀번호').then(e => print('로그인 완료.')).catch(console.error);
});

client.on('change', item => {
	if(['반달러의 아이피'].includes(item.username)) {
		console.log('반달');
		client.revert(item.document.fulltitle, String(Number(item.rev) - 1), '초고속! r' + String(Number(item.rev) - 1) + '로 즉시복구!!').then(console.log).catch(console.error);
	}
});
