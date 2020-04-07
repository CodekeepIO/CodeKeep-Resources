export const isEmpty = (n: any) => {
	return !(!!n ? (typeof n === 'object' ? (Array.isArray(n) ? !!n.length : !!Object.keys(n).length) : true) : false);
};

export const getParameterByName = (name: string, url?: string) => {
	if (!url) url = window.location.pathname;
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
