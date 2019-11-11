import axios from 'axios';

export default {
    sendEmail: emailData => {
        return axios.post('api/communication/sendEmail', emailData);
    }
}