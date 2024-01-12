import React from 'react';
import authban from '../../_assets/images/authetication.jpg';

export const SignIn = () => {
    return (
        <div className="modal fade" tabindex="-1" id="loginmodal">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-body">
                        {/* <button type="button" class="btn-close" data-bs-dismiss="modal"></button> */}
                        <div className='leftlog'>
                            <img src={authban} alt='image' className='img-fluid' />
                        </div>
                        <div className='rightlog'>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
