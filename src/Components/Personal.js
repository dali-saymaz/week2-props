import React from 'react';
// import Header from './header';
import PersonelData from '../foreigners.json';

const Personal = () => {
console.log(PersonelData)
    return (

       
        PersonelData.map((person) => {
            console.log(person)
            return(
            <>
                <div className="row">

                    <div className="col-3">

                        <div className="bg-danger">Person</div>

                        <div className="card" style="width: 18rem;">
                            <img src={person.avatar} className="card-img-top"
                                alt="..." />
                            <div className="card-body">
                                <p className="card-text">Firstname: {person.first_name} </p>
                                <p className="card-text">Lastname: {person.last_name}</p>
                                <p className="card-text">Adress:  {person.adress}</p>
                                <p className="card-text">Salary:  {person.salary}</p>
                                <p className="card-text">Gender:  {person.gender}</p>
                                <p className="card-text">E-mail:  {person.email}</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-9">

                        {person.Children.map(() =>
                            <div className="row">
                                <div className="bg-danger">Children</div>
                                <div className="card" style="width: 18rem;">
                                    <img src="https://robohash.org/inventoredolorumest.png?size=250x250&set=set1"
                                        className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Firstname: {person.children.firstName}</p>
                                        <p className="card-text">Gender: {person.children.gender}</p>
                                        <p className="card-text">Birthday: {person.children.birthday}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {person.friends.map(() =>
                            <div className="row">
                                <div className="bg-danger">Friend</div>
                                <div className="card" style="width: 18rem;">
                                    <img src="https://robohash.org/inventoredolorumest.png?size=250x250&set=set1"
                                        className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Firstname: </p>
                                        <p className="card-text">Gender: </p>
                                        <p className="card-text">Birthday: </p>
                                        <p className="card-text">Phone: </p>
                                    </div>
                                </div>
                            </div>

                        )}

                    </div>
                </div>
            </>
            )
        }
        )
    )
}

export default Personal;