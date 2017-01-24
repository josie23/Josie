sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"sap/m/MessageToast"
], function(Controller,JSONModel,ResourceModel,MessageToast) {
	"use strict";

	return Controller.extend("SAPUI5BootCamp.controller.APP", {
		
		onInit: function() {
			var i18nModel = new ResourceModel({
				bundleName: "SAPUI5BootCamp.i18n.i18n"
			});
			
			this.getView().setModel(i18nModel,"i18n");
			
			var oData = {
				field : {
					username : "Username"
				}
			}; var oModel = new JSONModel(oData);
			
			this.getView().setModel(oModel);
				
				// var i18nModel = new ResourceModel({
				// bundleName: "sap.iu.bootcamp.i18n.i18n"
		},
		
		// var oModel = new JSONModel(odDATA);
		// this.getView().setModel(oModel);
		
		
		
		
		
		onLoginPress: function() {
			// var oTextField = this.getView().byId("password");
			var oUsername = this.getView().byId("username").getValue();
			var oPassword = this.getView().byId("password").getValue();
			
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/field/username");
			var sMsg = oBundle.getText("helloMsg",[sRecipient]);
			MessageToast.show(sMsg);
			// 	if (((ouser === "") || (opw === "")) || ((ouser === " ") || (opw === " "))) {
			// 		sap.m.MessageToast.show("Please Enter Value");
			// 	} else if ((ouser.length <= 4) || (opw.length <= 4)) {
			// 		sap.m.MessageToast.show("Value is less than 5 Characters");
			// 	}
		 	// sap.m.MessageToast.show(oTextField.getValue() + oTextField1.getValue());
			
		}

	});
});