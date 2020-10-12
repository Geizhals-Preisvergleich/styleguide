import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const basePath = process.env.EXPORT_MODE === 'nobasepath' ? '/' : '/styleguide';
console.log("basePath: " + basePath);

polka() // You can also use Express
	.use(
		basePath, // only for exporting
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
