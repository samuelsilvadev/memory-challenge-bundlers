const path = require('path');

const cwd = process.cwd();

require('esbuild')
	.build({
		entryPoints: [path.join(cwd, 'src/index.jsx')],
		bundle: true,
		minify: true,
		minifyIdentifiers: true,
		minifySyntax: true,
		sourcesContent: false,
		treeShaking: true,
		outdir: 'build',
		define: {
			'process.env.NODE_ENV': "'production'",
		},
	})
	.catch(() => process.exit(1));
