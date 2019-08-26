(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('business-common', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['business-common'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooterComponent = /** @class */ (function () {
        function FooterComponent() {
        }
        /**
         * @return {?}
         */
        FooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        FooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'business-common-footer',
                        template: "<p>business-common footer works!</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        FooterComponent.ctorParameters = function () { return []; };
        return FooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BusinessCommonModule = /** @class */ (function () {
        function BusinessCommonModule() {
        }
        BusinessCommonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [FooterComponent],
                        imports: [],
                        exports: [FooterComponent]
                    },] }
        ];
        return BusinessCommonModule;
    }());

    exports.BusinessCommonModule = BusinessCommonModule;
    exports.FooterComponent = FooterComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=business-common.umd.js.map
