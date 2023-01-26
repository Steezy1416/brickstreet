import React from 'react'
function About() {
  return (
    <div className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="col-md-9 col-xl-10 text-center mx-auto">
          <h2 className='privacyTitles'>About Us</h2>
          <p className="w-lg-50 paragraphText">Brick Street is a marketplace dedicated to the buying and selling of new and used Lego sets and bricks. We strive to create an online community where Lego enthusiasts can come together to share their passion for the building blocks. Our mission is to make it easy for people to find the sets and bricks they need to complete their collections and make their building dreams a reality. Whether you're a collector, builder, or just looking for a fun new hobby, Brick Street is the place for you. So come and join us on our journey to build something amazing, brick by brick.</p>
        </div>
        <div class="pt-5">
          <h2 class="text-center privacyTitles">Frequently Asked Questions</h2>
          <div class="container">
            <div class="row">
              <div class="col-md-6 offset-md-3">
                <div id="faqlist" class="accordion accordion-flush">
                  <div class="accordion-item">
                    <h2 class="accordion-header"><button class="btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content-accordion-1">What is Brick Street?</button></h2>
                    <div id="content-accordion-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                      <p class="accordion-body"> Brick Street is an online marketplace dedicated to the buying and selling of new and used Lego sets and bricks. We bring together a community of Lego enthusiasts to share their passion and help each other find the sets and bricks they need.</p>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header"><button class="btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content-accordion-2">How can I buy or sell on Brick Street?</button></h2>
                    <div id="content-accordion-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                      <p class="accordion-body"> To buy or sell on Brick Street, you will need to create an account and list your items for sale or search for items to purchase. All transactions will be completed through our secure platform.</p>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header"><button class="btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content-accordion-3">What types of Lego sets and bricks can I find on Brick Street?</button></h2>
                    <div id="content-accordion-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                      <p class="accordion-body"> You can find a wide variety of new and used Lego sets and bricks on Brick Street, including hard-to-find and discontinued sets. We have a wide range of items from all different themes, such as City, Star Wars, Harry Potter, Ninjago and more.</p>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header"><button class="btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content-accordion-4">How can I be sure that I am getting a good deal on my purchase?</button></h2>
                    <div id="content-accordion-4" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                      <p class="accordion-body"> Brick Street's team will check all the items before listing, to ensure that they are in good condition and that the prices are fair. Additionally, our platform has a review system so you can see what other customers have said about the seller.</p>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header"><button class="btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content-accordion-5">How are the transactions and payments handled on Brick Street?</button></h2>
                    <div id="content-accordion-5" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                      <p class="accordion-body"> All transactions on Brick Street are completed through our secure platform. We use Stripe for payments, which is a well-known and secure payment gateway.</p>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header"><button class="btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content-accordion-6">What if I have a problem with my purchase?</button></h2>
                    <div id="content-accordion-6" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                      <p class="accordion-body"> If you have any issues with your purchase, please contact us immediately and we will do our best to resolve the problem. We want to make sure that all of our customers are happy with their experience on Brick Street.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About
