import UIKit
import Foundation
import AVFoundation


extension PluginMediaStreamRenderer {
	func getStillURI() -> String {
		// Create the UIImage
		UIGraphicsBeginImageContextWithOptions(self.elementView.bounds.size, true, 0.0)
		self.elementView.drawViewHierarchyInRect(self.elementView.bounds, afterScreenUpdates: true)

		self.elementView.layer.renderInContext(UIGraphicsGetCurrentContext()!)
		let image = UIGraphicsGetImageFromCurrentImageContext()
		UIGraphicsEndImageContext()
		let imageData : NSData = UIImageJPEGRepresentation(image!, 0.8)!
		let strBase64 : String = imageData.base64EncodedStringWithOptions(.Encoding64CharacterLineLength)
		return strBase64
    }
}

extension iosrtcPlugin {
	func captureStillAsURI(id : Int) -> String {
		let pluginMediaStreamRenderer = self.pluginMediaStreamRenderers[id]
		if pluginMediaStreamRenderer == nil {
			NSLog("iosrtcPlugin#captureStillAsURI() | ERROR: pluginMediaStreamRenderer with id=%@ does not exist", String(id))
			return ""
		}
		return self.pluginMediaStreamRenderers[id]!.getStillURI()
	}
}
