# cordova-plugin-iosrtc-capturestill
Captures still images from UIView containing streaming media (for use with iOS RTC plugin only)

This plugin is still in development. The intention is to extend the iosrtcPlugin and MediaStreamRenderer classes to provide a facility to capture frames from the underlying UIView as Base64 encoded strings. These can be either passed as values to img tags or saved by decoding the string.

This was initiated after reading this issue:

https://github.com/eface2face/cordova-plugin-iosrtc/issues/116

and will hopefully address needs without affecting the core development of the iosrtc plugin.
