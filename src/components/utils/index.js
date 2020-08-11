const refreshFacebook = () => {
	console.log("requested Facebook re-parsing");
	if (FB && FB.XFBML) {
		FB.XFBML.parse();
		console.log("re-parsed facebook");
	}
};

export { refreshFacebook };
