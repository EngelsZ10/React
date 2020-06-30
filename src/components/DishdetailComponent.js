import React, {Component} from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';


class Dishdetails extends Component{


    render(){ 
        
        const comments = this.props.dishSelected.comments.map( (comment) => {

            return(
                <il key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {comment.date} </p>
                </il>
            );

        });

        return(
            
            <div className="row ml-md-4">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={this.props.dishSelected.image} alt={this.props.dishSelected.name}/>
                        <CardBody>        
                            <CardTitle> {this.props.dishSelected.name} </CardTitle>
                            <CardText>{this.props.dishSelected.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h2><strong>Coments</strong></h2>
                    <ul clasName="list-unstyled" >
                        {comments}
                    </ul>
                </div>
            </div>
            
        );
    
    }
}

export default Dishdetails;