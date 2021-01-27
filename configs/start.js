const path = require('path');

const cwd = process.cwd();

require('esbuild')
	.serve(
		{
			port: 3000,
		},
		{
			entryPoints: [path.join(cwd, 'src/index.jsx')],
			bundle: true,
			outdir: 'build',
			define: {
				'process.env.NODE_ENV': "'development'",
			},
		}
	)
	.catch(() => process.exit(1));
