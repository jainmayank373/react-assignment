import React ,{Component}from 'react';
import {Button,Dropdown,DropdownItem,DropdownToggle,DropdownMenu} from 'reactstrap';
import { connect} from 'react-redux';
const MapToStateProps = state => {
        return {
                productData:state.Data
        }
}
class  Form extends Component {



                   

                    
                    constructor(props){
                                super(props);
                                console.log(props.location.state,props.productData);

                                this.state ={
                                        name:'',
                                        weight:'',
                                        availability:'',
                                        url:'',
                                        priceTier:'Budget',
                                        price:'',
                                        isEditable:'',
                                        dropdownOpen:false,
                                        touched:{
                                                name:false,
                                                weight:false,
                                                url:false,
                                                priceTier:false
                                        }
                                }
                                this.selectDropdown = this.selectDropdown.bind(this)
                                this.toggle =  this.toggle.bind(this);
                                this.handleSubmit = this.handleSubmit.bind(this);
                                this.DropItem =  this.DropItem.bind(this);
                                this.onCancel = this.onCancel.bind(this);
                    }
                    
                    DropItem = () =>{

                                return (
                                        this.state.priceTier == "Budget" ?
                                                (<DropdownMenu>
                                                        <DropdownItem onClick={this.selectDropdown} >4k - 6k</DropdownItem>
                                                        <DropdownItem  onClick={this.selectDropdown}>6k - 9k</DropdownItem>
                                                        <DropdownItem onClick={this.selectDropdown}>6k - 9k</DropdownItem>
                                                </DropdownMenu>):
                                                (<DropdownMenu>
        
                                                        <DropdownItem onClick={this.selectDropdown} >11k - 20k</DropdownItem>
                                                        <DropdownItem  onClick={this.selectDropdown}>20k - 30k</DropdownItem>
                                                        <DropdownItem onClick={this.selectDropdown}>30k+</DropdownItem>                                               
                                                </DropdownMenu>)
                        );
                    }

                    handleSubmit(event){

                               console.log("ON SUBMIT",this.props.productData);
                               this.props.productData.arrayOfProducts.filter((data)=>{ if(data._id == this.props.location.state.productId){
                                                                data.name = this.state.name;
                                                                data.weight = this.state.weight;
                                                                if(this.state.availability !== ""){
                                                                        
                                                                        data.availability = this.state.availability;
                                                                
                                                                }
                                                                data.isEditable = this.state.isEditable;
                                                                data.price = this.state.price;
                                                                data.priceTier = this.state.priceTier;
                                                                

                               }})
                               this.props.history.push('/');
                    }

                    toggle(){

                                console.log(this.state.weight);
                                this.setState(prevState=>({
                                        dropdownOpen:!prevState.dropdownOpen
                                }))
                        }

                    onChange(value,field){
                                const key =  field;
                                console.log("VALUE",value,field,this.state);
                                this.setState({[field]:value})
                    }

                    selectDropdown(e){
                                console.log(e.currentTarget.textContent);
                                this.setState( {price:e.currentTarget.textContent})
                    }

                    onCancel(){
                                this.props.history.push('/');
                    }

                    render(){
                                 return (
                                    
                                        <div>
                                            
                                        <h1>FILL THE FORM TO EDIT!</h1>
                                        <div className="material__form">
                                            <form  className="custom__form" >
                                                    <div className="custom_input">
                                                        <input defaultValue={this.state.name} onChange={(e)=>{this.onChange(e.target.value,"name")}} defaultValue="" type="text" name="name" required id="name" />
                                                        <label>Name</label>
                                                    </div>

                                                    <div className="custom_input">
                                                        <input defaultValue={this.state.weight} onChange={(e)=>{this.onChange(e.target.value,"weight")}} type="text" name="weight" required id="weight" />
                                                        <label>Weight</label>
                                                    </div>

                                                    <div  className="custom_input">
                                                        <input  defaultValue={this.state.availability} onChange={(e)=>{this.onChange(e.target.value,"availability")}} type="number" name="availability"  id="availablity" />
                                                        <label >Availability</label>
                                                    </div>

                                                    <div className="custom_input">
                                                        <input  defaultValue={this.state.url} onChange={(e)=>{this.onChange(e.target.value,"url")}} type="text" name="url" required id="url" />
                                                        <label>Product url</label>
                                                    </div>

                                                    <div className="radio">       
                                                            <div>
                                                                    <h4>Please select price tier</h4>    
                                                            </div>                                         
                                                            <div className="custom__radio">
                                                            
                                                                    <div className="radio_field" >
                                                                            <input defaultValue="Budget"  onChange={(e)=>{this.onChange(e.target.value,"priceTier")}} type="radio" className="radio" name="price" id="budget" required  className="" />                                
                                                                            <label htmlFor="budget">Budget</label>
                                                                    </div>
                                                                    <div className="radio_field">
                                                                            <input defaultValue="Premier" onChange={(e)=>{this.onChange(e.target.value,"priceTier")}}  type="radio" className="radio" required name="price" id="primer" />
                                                                            <label htmlFor="primer">Primer</label>
                                                                    </div>
                                                            </div>
                                                    </div>
                                                    
                                                    <div className="dropdown_field">
                                                            <Dropdown  required size="lg" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                                                    <DropdownToggle caret>Price Range</DropdownToggle>
                                                                    
                                                                        <this.DropItem />
                                
                                                            </Dropdown>
                                                    </div>
                                                    <div>
                                                            <div className="checkbox_field">
                                                                    <input defaultValue="false" onChange={(e)=>{this.onChange(e.target.value,"isEditable")}} type="checkbox" className="checkbox" id="editable" />
                                                                    <label htmlFor="editable">Editable</label>

                                                            </div>
                                                    </div>
                                                    <div className="form_action">
                                                            <Button disabled={this.state.name == "" || this.state.weight == "" || this.state.url == "" || this.state.priceTier == "" || this.state.price == ""} onClick={this.handleSubmit}>Submit</Button>
                                                            <Button onClick={this.onCancel}>Cancel</Button>
                                                    </div>
                                          
                                            </form>
                                        </div>
                                        </div>
                                    
                                )
                    }
                    
               
}

export default (connect(MapToStateProps)(Form));