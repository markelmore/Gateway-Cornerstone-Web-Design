module.exports = {
    name: "Gateway Cornerstone Web Design",
    email: "gatewaycornerstoneweb@gmail.com",
    phoneForTel: "+13096346106",
    phoneFormatted: "(309) 634-6106",
    address: {
        lineOne: "P.O. Box 12345",
        //! lineTwo: "",
        city: "Swansea",
        state: "IL",
        zip: "62226",
        country: "US",
        mapLink: "https://maps.app.goo.gl/iKoPf1B6CoHVoWNi6",
    },
    socials: {
        facebook: "https://www.facebook.com/people/Gateway-Cornerstone-Web-Design/61582680824948/",
        instagram: "https://www.instagram.com/",
        googleBusiness: "",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.gatewaycornerstone.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
