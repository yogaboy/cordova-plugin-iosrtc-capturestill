/*global cordova, module*/

module.exports = {
	capturestill: function (elementid, successCallback, errorCallback) {
		if (typeof mediaStreamRenderers === 'undefined') {
			if (typeof errorCallback == 'function') {
				errorCallback("mediaStreamRenderers is not defined. Are you loading the iosrtc framework?");
			} else {
				throw new Error("mediaStreamRenderers is not defined. Are you loading the iosrtc framework?");
			}
			return false;
		}
		if (typeof mediaStreamRenderers[elementid] == 'undefined') {
			if (typeof errorCallback == 'function') {
				errorCallback("elementid "+elementid+" is not defined in mediaStreamRenderers");
			} else {
				throw new Error("elementid "+elementid+" is not defined in mediaStreamRenderers");
			}
			return false;
		}
//		var keys = Object.keys(mediaStreamRenderers);
		elementid = mediaStreamRenderers[elementid].id;
		cordova.exec(successCallback, errorCallback, "iosrtc", "getStillURI", [elementid]);
	}
};
