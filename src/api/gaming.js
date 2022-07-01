import axios from 'axios';
//after downloading ngrok from https://dashboard.ngrok.com/get-started/setup
//get <authtoken> from https://dashboard.ngrok.com/get-started/your-authtoken
//run ngrok authtoken <authtoken> --> This command only needs to be done once. 
//npm run tunnel (included in package.json script object, by default port number 3000) or run ngrok http <PORT_NUMBER_OF_MONGO_SERVER> or specify the port number in package.json script object with the -p option to specify the MONGO SERVER PORT NUMBER to run the ngrok server from the required port.
//paste the url into baseURL
//After expiration time restart ngrok and paste the new url into baseURL 
export default axios.create({
    baseURL: 'http://93ff-182-74-179-155.ngrok.io' //or 'http://localhost:3000' or 'http://127.0.0.1:3000'
});

//OR explore caddyserver https://caddyserver.com/