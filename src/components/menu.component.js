import React, {Component} from 'react';
import {Media,Table,Button} from 'reactstrap';
import {Link,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
const Editable = (pros) => {
                        console.log("INSIDE ISEDITABLE",pros.pros.availablity);
                        return (
                                pros.pros.availablity==true?<Button   color="danger">EDIT</Button>:null
                        );
                }
const MapToStateProps = state => {
                return {

                        Main: state.main,
                        Form:state.form,
                        poductData:state.Data
                }
}
     
class Menu extends Component {
        

        constructor(props){
                super(props);
                console.log("THIS IS THE PORPS DATA",props.poductData);
                this.state ={
                        JSONdata: props.poductData
                }
           //     this.history  = this.props.history;
                
        }
        
        
        navig(id){
                    this.props.history.push("/edit-product",{
                            productId:id
                    });
        }

        render(){                    
                return (
                    
                       this.state.JSONdata.arrayOfProducts.map((product)=>{
                                console.log(product.name);
                                return (
                                    
                                                <tr key={product._id}>
                                                    <td>{product.name}</td>
                                                    <td>{product.weight}</td>
                                                    <td>{product.availability}</td>
                                                    <td>
                                                        {product.isEditable && (<Button onClick={()=>this.navig(product._id)}>EDIT</Button>)}
                                                    </td>
                                                </tr>
                                    
                                )
                        })
                );
        }
               
}

export default withRouter(connect(MapToStateProps)(Menu));