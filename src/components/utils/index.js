const refreshFacebook = () => {
	if (FB && FB.XFBML) {
		FB.XFBML.parse();
	}
};

export { refreshFacebook };
