const express = require('express');
const router  = express();
const bodyParser = require('body-parser');

if(typeof(Array.prototype.includes) !== 'function') {
    Array.prototype.includes = function(val) {
        for(var item of this) {
            if(item === val) return true;
        }
        
        return false;
    };
}

router.use(bodyParser.json({
    limit: '50mb'
}));

router.use(bodyParser.urlencoded({ 
	limit: '50mb',
	extended: false
}));

router.use(express.static('public'));

router.use(require('express-fileupload')({
	limits: {
		fileSize: 50 * 1024 * 1024 * 1024
	},
	safeFileNames: true,
	responseOnLimit: '화일이 너무 큽니다!',
	uploadTimeout: 0
}));

router.get('/', (req, res) => {
	res.send(`
		<title>파워업로더</title>
		<meta charset=utf8 />
		<meta name=viewport content="width=device-width, initial-scale=1" />
		
		<form method=post enctype=multipart/form-data>
			<div class=form-group>
				<label>화일: </label>
				<input type=file class=form-control name=file />
			</div>
			
			<div class=btns>
				<button type=submit class="btn btn-info" style="width: 100px;">올리기!</button>
			</div>
		</form>
	`);
});

router.post('/', (req, res) => {
	const file = req.files['file'];
	if(!file) res.send(`
		<title>실패</title>
		<meta charset=utf8 />
		<meta name=viewport content="width=device-width, initial-scale=1" />
		
		
		<h2>문제가 발생했습니다!</h2>
	`);
	
	file.mv('./uploads/' + Math.floor(Math.random() * 1e7) + '-' + file.name, x => console.log('파일이 올라왔습니다.'), res.send(`
		<title>성공</title>
		<meta charset=utf8 />
		<meta name=viewport content="width=device-width, initial-scale=1" />
		
		
		<h2>화일이 저장되었읍니다^^</h2>
	`));
});

router.listen(80, '192.168.0.10', x => 1);
