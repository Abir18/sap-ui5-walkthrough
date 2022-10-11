sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello: function () {
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView()
                .getModel()
                .getProperty("/recipient/name");

            const sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // show message
            MessageToast.show(sMsg);
        }
    });
});
