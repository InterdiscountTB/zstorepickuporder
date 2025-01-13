sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onBringIn: async function(oBindingContext, aSelectedContexts) {
            let oContext;

            // Für Line Items bei der Selektion.
            if (aSelectedContexts.length > 0) {
                oContext = aSelectedContexts[0];
            } else {
                oContext = oBindingContext;
            }

            await this.editFlow.invokeAction(
                "com.sap.gateway.srvd.zui_storepickuporder.v0001.setWarrantyExtBringIn(com.sap.gateway.srvd.zui_storepickuporder.v0001.PickupOrderItemType)",
                {
                    contexts: oContext,
                    skipParameterDialog: false
                }
            );

            location.reload();
        },
        onBringInEnable:  async function(oBindingContext, aSelectedContexts) {
            let oContext;

            if (aSelectedContexts.length > 0) {
                oContext = aSelectedContexts[0];
            } else {
                return false;
            }

            const sBringInConditionIsEnabled = await oContext.requestProperty("BringInConditionIsEnabled");
            return sBringInConditionIsEnabled === "X";
        },
        
        onPickUp: async function(oBindingContext, aSelectedContexts) {
            let oContext;

            // Für Line Items bei der Selektion.
            if (aSelectedContexts.length > 0) {
                oContext = aSelectedContexts[0];
            } else {
                oContext = oBindingContext;
            }

            await this.editFlow.invokeAction(
                "com.sap.gateway.srvd.zui_storepickuporder.v0001.setWarrantyExtPickUp(com.sap.gateway.srvd.zui_storepickuporder.v0001.PickupOrderItemType)",
                {
                    contexts: oContext,
                    skipParameterDialog: false
                }
            );

            location.reload();
        },
        onPickUpEnable:  async function(oBindingContext, aSelectedContexts) {
            let oContext;

            if (aSelectedContexts.length > 0) {
                oContext = aSelectedContexts[0];
            } else {
                return false;
            }

            const sPickUpCondIsEnabled = await oContext.requestProperty("PickUpCondIsEnabled");
            return sPickUpCondIsEnabled === "X";
        },

        onMobilePrOneYr: async function(oBindingContext, aSelectedContexts) {
            let oContext;

            // Für Line Items bei der Selektion.
            if (aSelectedContexts.length > 0) {
                oContext = aSelectedContexts[0];
            } else {
                oContext = oBindingContext;
            }

            await this.editFlow.invokeAction(
                "com.sap.gateway.srvd.zui_storepickuporder.v0001.setMobileProtectOneYr(com.sap.gateway.srvd.zui_storepickuporder.v0001.PickupOrderItemType)",
                {
                    contexts: oContext,
                    skipParameterDialog: false
                }
            );

            location.reload();
        },
        onMobilePrOneYrEnable:  async function(oBindingContext, aSelectedContexts) {
            let oContext;

            if (aSelectedContexts.length > 0) {
                oContext = aSelectedContexts[0];
            } else {
                return false;
            }

            const sMobilePrOneYrCondIsEnabled = await oContext.requestProperty("MobilePrOneYrCondIsEnabled");
            return sMobilePrOneYrCondIsEnabled === "X";
        },

        onMobilePrTwoYr: async function(oBindingContext, aSelectedContexts) {
            let oContext;

            // Für Line Items bei der Selektion.
            if (aSelectedContexts.length > 0) {
                oContext = aSelectedContexts[0];
            } else {
                oContext = oBindingContext;
            }

            await this.editFlow.invokeAction(
                "com.sap.gateway.srvd.zui_storepickuporder.v0001.setMobileProtectTwoYr(com.sap.gateway.srvd.zui_storepickuporder.v0001.PickupOrderItemType)",
                {
                    contexts: oContext,
                    skipParameterDialog: false
                }
            );

            location.reload();
        },
        onMobilePrTwoYrEnable:  async function(oBindingContext, aSelectedContexts) {
            let oContext;

            if (aSelectedContexts.length > 0) {
                oContext = aSelectedContexts[0];
            } else {
                return false;
            }

            const sMobilePrTwoYrCondIsEnabled = await oContext.requestProperty("MobilePrTwoYrCondIsEnabled");
            return sMobilePrTwoYrCondIsEnabled === "X";
        },

        scanActivateArticleEnable: async function(oBindingContext, aSelectedContexts) {
            let oContext;

            if (aSelectedContexts.length > 0) {
                oContext = aSelectedContexts[0];
            } else {
                return false;
            }

            const sActivationIsEnabled = await oContext.requestProperty("ActivationIsEnabled");
            return sActivationIsEnabled === "X";
        },

        scanPersonalkartennummerEnable: async function(oBindingContext, aSelectedContexts) {
            let oContext;

            if (oBindingContext) {
                oContext = oBindingContext;
            } else {
                return false;
            }

            const sPersonalCardIsEnabled = await oContext.requestProperty("PersonalCardIsEnabled");
            return sPersonalCardIsEnabled === "X";
        },
        
        showAttachment: async function(oBindingContext, aSelectedContexts) {
            let oContext;

            // Für Line Items bei der Selektion.
            if (aSelectedContexts.length > 0) {
                oContext = aSelectedContexts[0];
            } else {
                oContext = oBindingContext;
            }

            const sUrl = oContext.getProperty("Attachment");
            window.open(sUrl);
        },
        showAttachmentEnable: function(oBindingContext) {
            const sFilename = oBindingContext.getProperty("Filename");
            return sFilename !== '' && sFilename !== undefined;
        }
    };
});
