import React from "react";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description ,price, offer_price} = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <div><h2 className="price-app">MRP:-{price}</h2><br></br><br></br></div>
                  <div><h2 className="price-app-offer">Offer Price:-{offer_price}</h2><br></br><br></br></div>
                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
              
            </>
          );
          
        })}
      </section>
      <br></br>
      <br></br>

              <address>
                <div className="adddiv">
                  <h2 className="addressapp">Black Friday Furniture</h2>
                  <br></br>
                  <br></br>
                  <br></br>
                  <center>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</center>
                  <br></br>
                    <a href="https://goo.gl/maps/vYWuq2bdRLzmHb6n8"><img classname="addicons" src="../images/location.png"></img></a><br></br><br></br>
                    <span className="mobileNumber">+91 9582457450 </span> <img classname="addicons" src="../images/call.png"></img><br></br><br></br>
                    <a href="https://www.whatsapp.com/"><img classname="addicons" src="../images/whatsapp.png"></img></a><span className="mobileNumber"> +91 9582457451</span><br></br><br></br>
                    <a href="https://www.facebook.com/login/"><img classname="addicons" src="../images/fb.png"></img></a><br></br><br></br>
                  </div>
               
              </address>
    </>
  );
};

export default MenuCard;
