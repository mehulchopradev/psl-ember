import Service from '@ember/service';
import fetch from 'fetch';

export default Service.extend({
    async get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    },

    async post(url, postData) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });
        const data = await response.json();
        return data;
    }
});
