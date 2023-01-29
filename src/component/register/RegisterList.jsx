import React, { Component } from 'react'
import RegisterService from '../../services/RegisterService';

//classlar state bir yapıdadır. state yazarız: statefull
//classlar this çok sever
export default class RegisterList extends Component {

    // constructor
    constructor(props) {
        super(props);
        this.state = {
            registerList: [],
        }
        //bind
    } //end constructor

    //function

    //cdm:api servise erişim sağlamak
    componentDidMount() {
        RegisterService.apiRegisterList().then(
            (response) => {
                this.setState(
                    {
                        registerList: response.data
                    }
                )
            }
        )
    }
    //AJAX,SOCKET

    //render
    render() {
        return (
            <>
                <h1 className="text-center display-4 text-primary">Register List</h1>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>USERNAME</th>
                            <th>SURNAME</th>
                            <th>EMAİL</th>
                            <th>PASSWORD</th>
                            <th>TELEPHONE</th>
                            <th>DATE</th>
                            <th>Update</th>
                            <th>View</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.registerList.map(temp => 
                                <tr key={temp.id}>
                                    <td>{temp.id}</td>
                                    <td>{temp.username}</td>
                                    <td>{temp.surname}</td>
                                    <td>{temp.passwd}</td>
                                    <td>{temp.email}</td>
                                    <td>{temp.telephoneNumber}</td>
                                    <td>{temp.createdDate}</td>
                                    <td><i className="fa-solid fa-pen-to-square text-primary"></i></td>
                                    <td><i className="fa-solid fa-tower-observation text-warning"></i></td>
                                    <td><i className="fa-solid fa-trash text-danger"></i></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </>
        ) //end return
    } // end render
} //end class RegisterList

