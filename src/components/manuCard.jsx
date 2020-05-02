import React from 'react'; 
import { BookOutlined, EnvironmentFilled } from '@ant-design/icons'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './manuCard.css'
export default class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            info: null
        }
    }
    componentDidMount = () =>{
        this.setState(()=>{
            this.state.info= this.props
        })
    }
    render(){
        const {info} = this.props
        return(
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>ABC Manufacturing</h3><BookOutlined />
                        </div>
                        <div className="card-text">
                        <Row>
                            <Col md={10}>
                            <ul><span style={{margin:'5px'}}><EnvironmentFilled/></span>{info.location}</ul>
                            <ul><span>Fabrics produced: </span>{info.production}</ul>
                            <ul><span>Minimum: </span>{info.Minimum}</ul>
                            <ul><span>Average Price: </span>{info.price}</ul>
                            <ul><span>Brands worked with: </span>{info.Brands}</ul>
                            </Col>
                            <Col md={2}>
                                <Button type="primary">Primary</Button>
                            </Col>
                        </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}