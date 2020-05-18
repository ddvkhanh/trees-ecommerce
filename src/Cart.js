import React, { useState, useEffect, Component } from "react";
import BreadCrumbNCover from './BreadCrumbNCover';
import { connect } from "react-redux";
import { link } from "react-router-dom";
import { increaseItem, decreaseItem, removeItem } from './actions/cartActions'
import axios from "axios";




const pageName = "Your order";


const getTotalCart = (items) => {
    let total = 0;
    items.forEach(item => total = total + item.sellingPrice * item.quantity);
    return total;
}


//  function Cart(props) 
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email:''
        };
      }
    render() {

        const handleIncrease = (id) => {
            console.log(id, 'increase');
            this.props.increaseItem(id);

        }

        const handleDecrease = (id) => {
            console.log(id, 'decrease');
            this.props.decreaseItem(id);

        }

        const handleRemove = (id) => {
            console.log(id, 'remove');
            this.props.removeItem(id);

        }
        const handleChange= (e)=>{
            console.log(e.target.id, 'value');
            this.setState({
                [e.target.id]: e.target.value
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            let data = {
                items:this.props.items,
                 "firstName": this.state.firstName,
                 "lastName": this.state.lastName,
                 "email": this.state.email,
                 "phoneNumber":this.state.phoneNumber
              }
              console.log(data,'data');
              
            axios.post('https://firetree.azurewebsites.net/api/orders/confirm', data).then(res => {
                //'delete local storage'
                //'redirect to thank you page'
            })
        }


        return (
            <div>
                <BreadCrumbNCover pageName={pageName} />
                <div className="px-4 px-lg-0">
                    {/* For demo purpose */}
                    <div className="container text-white py-5 text-center">
                        <h1 className="display-4">Bootstrap 4 shopping cart</h1>
                        <h1>{this.props.items.length}</h1>
                        <p className="lead mb-0">Build a fully structred shopping cart page using Bootstrap 4. </p>
                        <p className="lead">Snippet by <a href="https://bootstrapious.com/snippets" className="text-white font-italic">
                            <u>Bootstrapious</u></a>
                        </p>
                    </div>
                    {/* End */}

                    <div className="pb-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                                    {/* Shopping cart table */}
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="p-2 px-3 text-uppercase">Product</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Price</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Quantity</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Total</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Remove</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.items.map((item) => {
                                                    console.log(item);

                                                    return (
                                                        <tr>
                                                            <th scope="row" className="border-0">
                                                                <div className="p-2">
                                                                    <img src={item.imageThumbUrl} alt="" width={70} className="img-fluid rounded shadow-sm" />
                                                                    <div className="ml-3 d-inline-block align-middle">
                                                                        <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{item.title}</a></h5><span className="text-muted font-weight-normal font-italic d-block">Category: {item.category.title}</span>
                                                                    </div>
                                                                </div>
                                                            </th>
                                                            <td className="border-0 align-middle"><strong>{item.sellingPrice}</strong></td>
                                                            <td className="border-0 align-middle"><strong> <span onClick={() => handleIncrease(item.id)}>IN</span> {item.quantity} <span onClick={() => handleDecrease(item.id)}>De</span></strong></td>
                                                            <td className="border-0 align-middle"><strong>{item.quantity * item.sellingPrice}</strong></td>
                                                            <td className="border-0 align-middle"><i className="fa fa-trash" onClick = {() => handleRemove(item.id)}/></td>
                                                        </tr>
                                                    )
                                                }
                                                )}


                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td scope="col" className="border-0 bg-light">
                                                        <div className="p-2 px-3 text-uppercase">Total Cart</div>
                                                    </td>
                                                    <td scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase"></div>
                                                    </td>
                                                    <td scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase"></div>
                                                    </td>
                                                    <td scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">{getTotalCart(this.props.items)}</div>
                                                    </td>
                                                    <td scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase"></div>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    {/* End */}
                                </div>
                            </div>
                            <div className="row py-5 p-4 bg-white rounded shadow-sm">
                                <div className="col-lg-6">
                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
                                    <div className="p-4">
                                        <p className="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
                                        <div className="input-group mb-4 border rounded-pill p-2">
                                            <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" className="form-control border-0" />
                                            <div className="input-group-append border-0">
                                                <button id="button-addon3" type="button" className="btn btn-dark px-4 rounded-pill"><i className="fa fa-gift mr-2" />Apply coupon</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
                                    <div className="p-4">
                                        <p className="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
                                        <textarea name cols={30} rows={2} className="form-control" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                                    <div className="p-4">
                                        <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                                        <ul className="list-unstyled mb-4">
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>$390.00</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>$0.00</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                                <h5 className="font-weight-bold">$400.00</h5>
                                            </li>

                                                <form >
                                                
                                                <input type="text" placeholder="First name" aria-describedby="button-addon3" className="form-control border-0"  id='firstName' onChange={(e)=> handleChange(e)}/>
                                                <input type="text" placeholder="Last name" aria-describedby="button-addon3" className="form-control border-0" id='lastName' onChange={(e)=> handleChange(e)} />
                                                <input type="text" placeholder="Phone number" aria-describedby="button-addon3" className="form-control border-0" id='phoneNumber' onChange={(e)=> handleChange(e)} />
                                                <input type="text" placeholder="Email" aria-describedby="button-addon3" className="form-control border-0" id='email' onChange={(e)=> handleChange(e)} />
                                                <button onClick = {(e) => handleSubmit(e)} className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</button>
                                                </form>



                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        items: state.carts.items,
    };
};

export default connect(mapStateToProps, {increaseItem, decreaseItem, removeItem})(Cart);

