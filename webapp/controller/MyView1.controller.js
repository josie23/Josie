sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("SAPUI5_Hernes1.controller.MyView1", {
	
	doIt : function(oEvent){
		sap.m.MessageToast.show(oEvent.getSource().getId() + " does it!");
	}
	
	});
});