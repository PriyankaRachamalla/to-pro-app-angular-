import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService() {
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        return true;
    };
    AuthGuardService.prototype.canActivateChild = function (route, state) {
        return true;
    };
    AuthGuardService = tslib_1.__decorate([
        Injectable()
    ], AuthGuardService);
    return AuthGuardService;
}());
export { AuthGuardService };
//# sourceMappingURL=auth-guard-service.service.js.map