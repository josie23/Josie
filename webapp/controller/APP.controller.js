sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"sap/m/MessageToast"
], function(Controller,JSONModel,ResourceModel,MessageToast) {
	"use strict";

	return Controller.extend("SAPUI5_Hernes1.controller.APP", {
		
		onInit: function() {
			var i18nModel = new ResourceModel({
				bundleName: "SAPUI5_Hernes1.i18n.i18n"
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
			
			// if (oUsername!=="" && oPassword!==""){
			// 	if ((oUsername.length >=6 && oUsername.length<=8) && (oPassword.length >=7 && oPassword.length<=10)){
			// 		if(oUsername==="hernes" && oPassword==="herness"){
			// 			sap.m.MessageToast.show("Successful login");
			// 		} else { 
					
			// 			sap.m.MessageToast.show("Invalid Username or Password");
			// 		}
			// 	}else {
					
			// 		sap.m.MessageToast.show("Invalid Length");
			// 	}
			// }else{
				
			// 	sap.m.MessageToast.show("Enter Username or Password");
			// } 
			
			// sap.m.MessageToast.show("Hello World");
		
			
			// sap.m.MessageToast.show("Hello World " + oTextField.getValue());
		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf SAPUI5_Hernes1.view.APP
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf SAPUI5_Hernes1.view.APP
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf SAPUI5_Hernes1.view.APP
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf SAPUI5_Hernes1.view.APP
		 */
		//	onExit: function() {
		//
		//	}

	});
});