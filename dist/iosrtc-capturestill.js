/*global cordova, module*/
module.exports = MediaStreamRenderer;
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
		cordova.exec(successCallback, errorCallback, "iosrtcPlugin", "getStillURI", [elementid]);
	}
};
*/

MediaStreamRenderer.prototype.captureStillAsURI = function(successCB,errorCB) {
	var self = this;
	exec(successCB,errorCB,"iosrtcPlugin","captureStillAsURI",[self.id]);
}

function captureStillAsUID(elementid, successCB, errorCB) {
	if (typeof mediaStreamRenderers === 'undefined') {
		if (typeof errorCB == 'function') {
			errorCB("mediaStreamRenderers is not defined. Are you loading the iosrtc framework?");
		} else {
			throw new Error("mediaStreamRenderers is not defined. Are you loading the iosrtc framework?");
		}
	}
	if (typeof mediaStreamRenderers[elementid] == 'undefined') {
		if (typeof errorCB == 'function') {
			errorCB("elementid "+elementid+" is not defined in mediaStreamRenderers");
		} else {
			throw new Error("elementid "+elementid+" is not defined in mediaStreamRenderers");
		}
	}
//		var keys = Object.keys(mediaStreamRenderers);
	var id = mediaStreamRenderers[elementid].id;
	cordova.exec(successCB, errorCB, "iosrtcPlugin", "captureStillAsURI", [id]);
}
