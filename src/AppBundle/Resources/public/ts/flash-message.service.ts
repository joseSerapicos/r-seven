var toastr = require('toastr');
import {Injectable} from '@angular/core';

// FlashMessageTypes
export var FlashMessageTypes = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
};

// Service
@Injectable()
export class FlashMessageService {
    constructor() {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "progressBar": true,
            "preventDuplicates": false,
            "positionClass": "toast-top-left", // Right side is not the best place because this is the work area
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "slideDown",
            "hideMethod": "fadeOut"
        }
    }

    /**
     * Message
     * @param body
     * @param head
     * @param type
     */
    public message(body: string, head = '', type = FlashMessageTypes.info): void
    {
        // Set info as default type if is not a valid entry
        type = (FlashMessageTypes[type] || FlashMessageTypes.info);
        toastr[type](body, head);
    }
}