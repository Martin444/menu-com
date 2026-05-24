import { init } from '../serverless.js';

export default init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Sansation_1.31_ReadMe.txt","fonts/Sansation_Bold.ttf","fonts/Sansation_Bold_Italic.ttf","fonts/Sansation_Italic.ttf","fonts/Sansation_Light.ttf","fonts/Sansation_Light_Italic.ttf","fonts/Sansation_plate.jpg","fonts/Sansation_Regular.ttf","img/assets/renderStore.jpeg","img/assets/screens.png","img/logos/logomenucom 1.png","img/logos/logomenucom_1.png","robots.txt","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".ttf":"font/ttf",".jpg":"image/jpeg",".jpeg":"image/jpeg",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.D5NpKGXF.js",app:"_app/immutable/entry/app.BPJJInzJ.js",imports:["_app/immutable/entry/start.D5NpKGXF.js","_app/immutable/chunks/Dxjx-bgK.js","_app/immutable/chunks/DI0ahX_d.js","_app/immutable/entry/app.BPJJInzJ.js","_app/immutable/chunks/DI0ahX_d.js","_app/immutable/chunks/CBNP3hMy.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about-service",
				pattern: /^\/about-service\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/dev-contact",
				pattern: /^\/dev-contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/merchant/[slug]",
				pattern: /^\/merchant\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/tyc",
				pattern: /^\/tyc\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());

export const config = {
	path: ["/*"],
	excludedPath: ["/.netlify/*"],
	preferStatic: true
};
