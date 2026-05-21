export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Sansation_1.31_ReadMe.txt","fonts/Sansation_Bold.ttf","fonts/Sansation_Bold_Italic.ttf","fonts/Sansation_Italic.ttf","fonts/Sansation_Light.ttf","fonts/Sansation_Light_Italic.ttf","fonts/Sansation_plate.jpg","fonts/Sansation_Regular.ttf","img/assets/renderStore.jpeg","img/assets/screens.png","img/logos/logomenucom 1.png","img/logos/logomenucom_1.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".ttf":"font/ttf",".jpg":"image/jpeg",".jpeg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.nYeCAmal.js",app:"_app/immutable/entry/app.h2v_qf7l.js",imports:["_app/immutable/entry/start.nYeCAmal.js","_app/immutable/chunks/BLwg4qxf.js","_app/immutable/chunks/0NmH6DSK.js","_app/immutable/entry/app.h2v_qf7l.js","_app/immutable/chunks/0NmH6DSK.js","_app/immutable/chunks/DE9nRwEa.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
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
				id: "/tyc",
				pattern: /^\/tyc\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
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
})();
