module.exports = {
    name: "Gateway Cornerstone Web Design",
    email: "mail@gatewaycornerstone.com",
    phoneForTel: "555-779-4407",
    phoneFormatted: "(555) 779-4407",
    address: {
        lineOne: "P.O. Box 12345",
        //! lineTwo: "",
        city: "St. Louis",
        state: "MO",
        zip: "63101",
        country: "US",
        mapLink: "https://maps.app.goo.gl/iKoPf1B6CoHVoWNi6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
