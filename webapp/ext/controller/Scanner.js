sap.ui.define([
    "sap/ndc/BarcodeScanner",
    "sap/m/MessageToast"
], function(BarcodeScanner, MessageToast) {
    'use strict';

    return {
        // Supercard
        scanSupercard: function(oBindingContext, aSelectedContexts) {
            let oContext;

            // Für Line Items bei der Selektion.
            if (aSelectedContexts.length > 0) {
                oContext = aSelectedContexts[0];
            } else {
                oContext = oBindingContext;
            }

            BarcodeScanner.scan(
                async (oData) => {
                    let sSupercard = oData.text;

                    if (oData.text) {
                        if (oData.text.length === 13) { // Direkte Supercard
                            sSupercard = oData.text;
                        } else if (oData.text.length > 20) {
                            sSupercard = oData.text.substr(9,13) // Beispiel Eingabe aus Datamatrix Code: (8018)762250101446252890(91)8918008735931EDF9DF3919F8B97F58D(8019)000003 --> 2501014462528
                        } else {
                            MessageToast.show("Supercard ungültig");
                            return;
                        }
                    }

                    await this.editFlow.invokeAction(
                        "com.sap.gateway.srvd.zui_storepickuporder.v0001.setSuperCard(com.sap.gateway.srvd.zui_storepickuporder.v0001.PickupOrderType)",
                        {
                            contexts: oContext,
                            parameterValues: [
                                { name: "SuperCardId", value: sSupercard }
                            ],
                            skipParameterDialog: true
                        }
                    )

                }
            );
        },

        // Personalkartennummer
        scanPersonalkartennummer: function(oBindingContext, aSelectedContexts) {
            let oContext;

            // Für Line Items bei der Selektion.
            if (aSelectedContexts.length > 0) {
                oContext = aSelectedContexts[0];
            } else {
                oContext = oBindingContext;
            }

            BarcodeScanner.scan(
                async (oData) => {
                    let sCard = oData.text;

                    /*if (oData.text) {
                        if (oData.text.length === 13) { // Direkte Supercard
                            sCard = oData.text;
                        } else if (oData.text.length > 20) {
                            sCard = oData.text.substr(9,13) // Beispiel Eingabe aus Datamatrix Code: (8018)762250101446252890(91)8918008735931EDF9DF3919F8B97F58D(8019)000003 --> 2501014462528
                        } else {
                            MessageToast.show("Supercard ungültig");
                            return;
                        }
                    }*/

                    await this.editFlow.invokeAction(
                        "com.sap.gateway.srvd.zui_storepickuporder.v0001.setPersonnelNo(com.sap.gateway.srvd.zui_storepickuporder.v0001.PickupOrderType)",
                        {
                            contexts: oContext,
                            parameterValues: [
                                { name: "PersonnelNo", value: sCard }
                            ],
                            skipParameterDialog: true
                        }
                    )

                }
            );
        },

        // Gutscheinkarte
        scanActivateArticle: function(oBindingContext, aSelectedContexts) {
            let oContext;

            // Für Line Items bei der Selektion.
            if (aSelectedContexts.length > 0) {
                oContext = aSelectedContexts[0];
            } else {
                oContext = oBindingContext;
            }

            BarcodeScanner.scan(
                async (oData) => {
                    await this.editFlow.invokeAction(
                        "com.sap.gateway.srvd.zui_storepickuporder.v0001.activateArticle(com.sap.gateway.srvd.zui_storepickuporder.v0001.PickupOrderItemType)",
                        {
                            contexts: oContext,
                            parameterValues: [
                                { name: "cardId", value: oData.text }
                            ],
                            skipParameterDialog: true
                        }
                    );
                }
            );
        }
    };
});
