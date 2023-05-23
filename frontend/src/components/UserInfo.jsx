import React from 'react'
import {FiEdit} from 'react-icons/fi'

function UserInfo({Info}) {
  

    return (<>
        <div className="container">
            <div className="vstack gap-2">
                <div className="bg-light border">
                    <div className="row">
                        <div className="col-4"><strong></strong></div>
                        <div className="col"><strong>User data</strong></div>
                    </div>
                </div>
                <div className="bg-light border">
                    <div className="row">
                        <div className="col-4">Name:</div>
                        <div className="col">{Info.name}</div>
                    </div>
                </div>
                <div className="bg-light border">
                    <div className="row">
                        <div className="col-4">Surname:</div>
                        <div className="col">{Info.surname}</div>
                    </div>
                </div>
                <div className="bg-light border">
                    <div className="row">
                        <div className="col-4">Email:</div>
                        <div className="col">{Info.email}</div>
                    </div>
                </div>
                <div className="bg-light border">
                    <div className="row">
                        <div className="col-4">Phone:</div>
                        <div className="col"> </div>
                    </div>
                </div>
                <div className="bg-light border">
                    <div className="row">
                        <div className="col-4">Country:</div>
                        <div className="col"> </div>
                    </div>
                </div>
                <div className="container">
                    <button className='btn btn-warning'> <FiEdit /> edit </button>
                </div>
            </div>
        </div>
    </>)
}

export default UserInfo