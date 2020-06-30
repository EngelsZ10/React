import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import Dishdetails from './DishdetailComponent';


class Menu extends Component {

    constructor(props){
        super(props);

        this.state = {
           selectedDish: null
        }
    }

    onDishSlect(dish){
        this.setState({ selectedDish: dish})
    }

    renderDish(dish){
        if (dish != null){
            return(
                <Dishdetails dishSelected={dish}/>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    render(){

        const menu = this.props.dishes.map( dish =>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSlect(dish)} >
                        <CardImg width='100%' src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle> {dish.name} </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row ml-md-4">
                    {menu}
                </div>
                {this.renderDish(this.state.selectedDish)}
            </div>
        );
    }

}

export default Menu;