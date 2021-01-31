import axios from 'axios';

const emailApi = {
    sendEmail: emailData => {
        return axios.post('api/communication/sendEmail', emailData);
    }
}

export default emailApi;