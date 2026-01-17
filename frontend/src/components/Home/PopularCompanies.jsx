import React from "react";

const PopularCompanies = () => {
  const topCompanies = [
    { id: 1, name: "Google", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    { id: 2, name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { id: 3, name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { id: 4, name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { id: 5, name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { id: 6, name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { id: 7, name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
    { id: 8, name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { id: 9, name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { id: 10, name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" },
    { id: 11, name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { id: 12, name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" },
    { id: 13, name: "Nvidia", logo: "https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg" },
    { id: 14, name: "Twitter", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" },
    { id: 15, name: "LinkedIn", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" },
    { id: 16, name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
    { id: 17, name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
    { id: 18, name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
    { id: 19, name: "Zoom", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg" },
    { id: 20, name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
    { id: 21, name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
    { id: 22, name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
    { id: 23, name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
    { id: 24, name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
    { id: 25, name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
    { id: 26, name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },
    { id: 27, name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
    { id: 28, name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
    { id: 29, name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
    { id: 30, name: "Goldman Sachs", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg" },
  ];

  return (
    <div className="companiesSection">
      <div className="companiesContainer">
        {/* Company Logo Slider */}
        <div className="companySliderSection">
          <h3 className="sliderTitle">Top Companies Hiring</h3>
          <div className="logoSliderContainer">
            <div className="logoSlider">
              {/* First set of logos */}
              {topCompanies.map((company) => (
                <div key={company.id} className="logoSlide">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${company.name}&background=667eea&color=fff&size=100`;
                    }}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {topCompanies.map((company) => (
                <div key={`duplicate-${company.id}`} className="logoSlide">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${company.name}&background=667eea&color=fff&size=100`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
