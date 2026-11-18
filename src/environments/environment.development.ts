export const environment = {
    production: true,
    stackFrameCount: 5,
    // apiEndpoint: 'http://45.251.235.6:8002',
    // fileEndpoint: 'http://45.251.235.6:8002',
    // apiEndpoint: 'http://117.247.77.100:8052',
    // fileEndpoint: 'http://117.247.77.100:8052',
    apiEndpoint: 'http://localhost:7073',
    fileEndpoint: 'http://localhost:7073',
    // apiEndpoint: 'http://192.168.1.50:8052',
    // fileEndpoint: 'http://192.168.1.50:8052',
    // smartCardEndpoint: "http://192.168.66.128:7073",
    smartCardEndpoint: "http://localhost:7073",
    toastrConfig: {
        closeButton: true
    }
};
// export const environment = {
//     production: true,
//     stackFrameCount: 5,
//     // Default values, updated dynamically
//     apiEndpoint: '',
//     fileEndpoint: '',
//     smartCardEndpoint: "http://localhost:7073",
//     toastrConfig: {
//         closeButton: true
//     }
// };
// // Dynamically set API and File Endpoints
// const hostname = 'ilssapp.com'
// if (hostname === 'ilssapp.com') {
//     // Local Network
//     environment.apiEndpoint = 'https://localhost:7073';
//     environment.fileEndpoint = 'https://localhost:7073';
// }
// else if (hostname === '192.168.1.50') {
//     // Local Network
//     environment.apiEndpoint = 'http://192.168.1.50:8052';
//     environment.fileEndpoint = 'http://192.168.1.50:8052';
// } else if (hostname === '117.247.77.100') {
//     // Public Network
//     environment.apiEndpoint = 'http://117.247.77.100:8052';
//     environment.fileEndpoint = 'http://117.247.77.100:8052';
// } else {
//     // Default to public IP if hostname doesn't match specific cases
//     // environment.apiEndpoint = 'http://45.251.235.6:8003';
//     // environment.apiEndpoint = 'http://45.251.235.6:8015';
//     environment.apiEndpoint = 'http://45.251.235.6:8002';
//     environment.fileEndpoint = hostname;
//     // environment.apiEndpoint = 'http://192.168.1.50:8052';
//     // environment.fileEndpoint = 'http://192.168.1.50:8052';
// }
