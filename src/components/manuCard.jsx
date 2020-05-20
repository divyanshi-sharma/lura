import React from 'react'; 
import { BookOutlined, EnvironmentFilled, BookFilled } from '@ant-design/icons'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './manuCard.css'
export default class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            info: null,
            saved: localStorage.getItem(`savedArticle-${this.props.index}`) || false
        }
    }
    handleClick = (e) => {
        console.log(this.state.saved)
        console.log(e.target)
        this.setState({saved: !this.state.saved})
        localStorage.setItem('savedArticle', this.state.saved)
    }
    componentDidUpdate = () => {
        console.log('updated', this.state.saved)
        localStorage.setItem(`savedArticle-${this.props.index}`, this.state.saved)
    }
    render(){
        const {info} = this.props
        return(
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>ABC Manufacturing</h3>
                            <Button onClick={this.handleClick} 
                            style={{backgroundColor:'none', border:'none'}}>
                                {this.state.saved?<BookFilled/>:<BookOutlined/>}
                            </Button>
                        </div>
                        <div className="card-text">
                        <Row>
                            <Col md={9}>
                            <ul><span style={{margin:'5px'}}><EnvironmentFilled/></span>{info.location}</ul>
                            <ul><span>Fabrics produced: </span>{info.production}</ul>
                            <ul><span>Minimum: </span>{info.Minimum}</ul>
                            <ul><span>Average Price: </span>{info.price}</ul>
                            <ul><span>Brands worked with: </span>{info.Brands}</ul>
                            </Col>
                            <Col md={3} style={{display:'flex', justifyContent:'flex-end', alignItems:'flex-start'}}>
                                <Button variant="outline-info">More Info</Button>
                            </Col>
                        </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}