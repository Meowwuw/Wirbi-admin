export const msalConfig = {
    auth: {
        clientId: "71898306-4196-458c-baa7-f7e2196e2d40",
        authority: "https://login.microsoftonline.com/d305944c-1191-4f11-9dfa-46441ece1655",
        redirectUri: "http://localhost:3000",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you're having issues on IE11 or Edge
    },
};
