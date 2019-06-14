import React, { Component } from 'react'
import axios from 'axios'
export default class eachProduct extends Component {
    state = {
        data: ''
    }
    componentDidMount = () => {
        console.log('each ', this.props.match.params.id);
        axios.get(`https://cc-mock-api.herokuapp.com/product/${this.props.match.params.id}`).then(res => {
            const { data } = res
            this.setState({ data: data })
        })
    }

    render() {
        const { data } = this.state
        return (
            <div>

                <img
                    className='img-fluid'
                    alt="complex"
                    src={data.image_url}
                    width='150px'
                />

                {data.id}<br />
                {data.name}<br />
                {data.description}<br />
                {data.price} ฿
            </div>
        )
    }

}