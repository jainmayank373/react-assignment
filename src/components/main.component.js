
import React from 'react';
import data from  '../data.json';
import Menu from './menu.component'
import {Navbar,NavbarBrand,Table,Jumbotron,Button} from 'reactstrap';
import {NavLink} from 'react-router-dom';

function Home() {
    const navigate = ()=>{
    }
    console.log(data);
  return (
    <div className="App">
             <Jumbotron>
        
                <h1 className="display-3">Sometimes it's better to REACT!</h1>
                <a href="https://www.linkedin.com/in/mayank-jain-879abb138"><Button className="button" color="danger" >
                        PORTFOLIO    
                 </Button></a>
                
            </Jumbotron>
            <Table responsive borderless hover>
                    <thead>
                        <th>Name</th>
                        <th>Weight</th>
                        <th>Avilablity</th>
                        <th>Edit</th>
                    </thead>                
                    <tbody>
                        
                         <Menu  />
                    </tbody>
            </Table>
    </div>
  );
}

export default Home;
