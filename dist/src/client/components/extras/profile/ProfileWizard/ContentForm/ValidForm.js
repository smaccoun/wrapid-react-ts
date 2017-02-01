"use strict";
const s = require('./style.css');
const MobxReactForm = require("mobx-react-form");
class ValidForm extends MobxReactForm {
    onSuccess(form) {
        alert('Form is valid! Send the request here.');
        console.log('Form Values!', form.values());
    }
    onError(form) {
        console.log('All form errors', form.errors());
        form.invalidate('This is a generic error message!');
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ValidForm;
//# sourceMappingURL=ValidForm.js.map