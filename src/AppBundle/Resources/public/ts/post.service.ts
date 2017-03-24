import {Injectable} from '@angular/core';
import {FlashMessageService, FlashMessageTypes} from './flash-message.service';
//import {Http, Headers} from 'angular2/http';
//import 'rxjs/add/operator/map';

// Interface PostResponse (template for post response)
export interface PostResponse {
    status: number,
    data: any,
    errors: any,
    flashMessages: any
}

// Service
@Injectable()
export class PostService {
    constructor(
        private _flashMessageService: FlashMessageService
    ) {}

    /**
     * Post. Send data to server
     * @param url
     * @param data
     * @returns {Promise}
     */
    public post(url: string, data: any): Promise<any>
    {
        let that = this;

        return new Promise(function(resolve, reject) {
            return $.post(
                url,
                data,
                postResponse => {
                    that.handleFlashMessages(postResponse);
                    let isSuccess = (postResponse.status == 1);
                    delete postResponse.status; // Is no more necessary

                    // Success
                    if (isSuccess) { return resolve(postResponse['data'] || null); }

                    // Error
                    let errors = (postResponse['errors'] || {});
                    // Add data exception into errors
                    if (postResponse['data']) {
                        if (postResponse['data']['localData']) {
                            errors['localData'] = postResponse['data']['localData'];
                        }
                        if (postResponse['data']['object']) {
                            errors['object'] = postResponse['data']['object'];
                        }
                    }
                    return reject(errors);

                }
            );
        });

        /*let headers = new Headers();
         headers.append('Content-Type', 'application/json');

         this._http.post(
         url,
         data,
         { headers: headers }
         )
         .map(response => response.json())
         .subscribe(
         response => console.log(response)
         );*/
    }

    /**
     * Handle handleFlashMessages from server
     * @param postResponse
     * @returns {PostResponse}
     */
    private handleFlashMessages(postResponse: PostResponse): any
    {
        // Request failed, no response has been returned.
        if (!('status' in postResponse)) {
            this._flashMessageService.message(
                'Something went wrong, no response has been returned.',
                'Unknown error',
                FlashMessageTypes.error
            );
        }

        // Flash Messages
        if (postResponse.flashMessages) {
            for (let flashMessage of postResponse.flashMessages) {
                this._flashMessageService.message(
                    flashMessage.body,
                    flashMessage.head,
                    flashMessage.type
                );
            }
            delete postResponse.flashMessages; // It's no more necessary
        }

        return postResponse;
    }
}