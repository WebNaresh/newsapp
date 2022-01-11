import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border" role="status">
                    <span className="my-3 sr-only"></span>
                </div>
            </div>
        )
    }
}

export default Spinner
