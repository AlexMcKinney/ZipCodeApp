import React, { Component } from 'react';
import lookup from '../services/services'
import '../App.css'
import { FaSearchLocation } from 'react-icons/fa';

interface MainProps {
    zipCode: string;
    location: Location | null;
    lastZipCode: string;
}

export default class MainComponent extends React.Component<MainProps> {
    state = {
        zipCode: "",
        location: null,
        lastZipCode: ""
    }

    clickButton = () => {
        lookup(this.state.zipCode).then((location: Location) => {
            console.log(location);
            this.setState({location: location, lastZipCode: this.state.zipCode})
        });
    };

    changeInput = (event) => {
        const value = event.target.value;
        if(value.length < this.state.zipCode.length){
            this.setState({zipCode: value, location: null});
        } else {
            this.setState({zipCode: value});
        }
    };

    onKeyPress = (event) => {
        const char = event.charCode;
        if(char === 13){
            this.clickButton();
        }
    };

    render() {
        const loc = this.state.location;

        function getURL(place: Place){
            return 'https://maps.google.com/?ll='+place.latitude+','+place.longitude+'&z=13';
        }

        return (
            <div>
                <div>
                    <h1 class='head'>
                        <FaSearchLocation class='left'/>
                        Zip Code Lookup App {this.state.location && this.state.location.country}
                        <FaSearchLocation class='right'/>
                    </h1>
                </div>
                <div>
                    <p>Enter a Zip Code below</p>
                    <input onChange={this.changeInput} onKeyPress={this.onKeyPress}/>
                    <button onClick={this.clickButton}>submit</button>
                </div>
                <div>
                    {this.state.location && <div>
                        {this.state.location['post code'] && <div>
                            <p>Results for {this.state.lastZipCode}</p>
                            <p class='nation'>Welcome to the {loc.country} ({loc['country abbreviation']})</p>
                            {loc.places && loc.places.map((place: Place) => (
                                <div key={place['place name']}>
                                    <p>
                                        {place['place name']}, {place.state} ({place['state abbreviation']})
                                        <a class='google-maps' target='_blank' href={getURL(place)}>Google Maps({place.latitude}, {place.longitude})</a>
                                    </p>
                                </div>
                            ))}
                        </div>}
                        {!this.state.location['post code'] && <div>
                            (nothing found for {this.state.lastZipCode})
                        </div>}
                    </div>}

                    {!this.state.location && <div>
                        (no zip code searched yet)
                    </div>}
                </div>
            </div>
        );
    }
}