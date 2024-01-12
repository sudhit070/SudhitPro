import React from 'react';
import { Loader } from '../../_components/common/Loader';
import contactImg from '../../_assets/images/contact-img.jpg';

const Contact = () => {

  const [loader, setLoader] = React.useState(false);

  return (
   <>
       <section class="section inner-banner">
            <div class="container">
                <h1 class="inner-her">Send me a Message. </h1>
            </div>
        </section>
        <section class="collection-list">
            <div class="section container position-relative">
                <form class="contact-form">
                    <div class="mb-3">
                        <label for="fullname" class="form-label">Type Your Full Name</label>
                        <input type="text" class="form-control" id="fullname" />
                    </div>
                    <div class="mb-3">
                        <label for="emailaddress" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="emailaddress" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Tell Me About You or Requirements!</label>
                        <textarea class="form-control" rows="5"></textarea>
                    </div>

                    <div class="mb-5">
                        <label class="form-label">Service You're Interested In,</label>
                        <div class="d-flex gap-5">
                            <div class="rad">
                                <input type="radio" class="form-check-input me-2" name="inquery" id="project" />
                                <label class="form-check-label" for="project">Project</label>
                            </div>
                            <div class="rad">
                                <input type="radio" class="form-check-input me-2" name="inquery" id="sketch" />
                                <label class="form-check-label" for="sketch">Sketch</label>
                            </div>
                            <div class="rad">
                                <input type="radio" class="form-check-input me-2" name="inquery" id="other" />
                                <label class="form-check-label" for="other">Other</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary no-animate">Submit</button>
                </form>
                <div class="contactimg">
                    <img src={contactImg} alt="contact" />
                </div>
            </div>
        </section>
   </>
  )
}

export default Contact;