sap.ui.jsview("SAPUI5_Hernes1.view.MyView1", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.MyView1
	 */
	getControllerName: function() {
		return "SAPUI5_Hernes1.controller.MyView1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.MyView1
	 */
	createContent: function(oController) {
		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			content: []
		});
		
		var oButton = new sap.m.Button({
			id: this.createId("MyButton"),
			text: "Hello JS View"
		});
		oPage.addContent(oButton.attachPress(oController.doIt));

		var app = new sap.m.App("myApp", {
			
		});
		app.addPage(oPage);
		return app;
	}

});