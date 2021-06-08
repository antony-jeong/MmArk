import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
import '../stylesheets/MyProfile.css';

class MyProfile extends Component {

    getRandomRolor(){
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }

    ColorLuminance(hex, lum) {
        // validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
          hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
        }
        lum = lum || 0;
      
        // convert to decimal and change luminosity
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
          c = parseInt(hex.substr(i*2,2), 16);
          c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
          rgb += ("00"+c).substr(c.length);
        }

        return rgb;
    }
      
    componentDidMount(){
        const randomColor = this.ColorLuminance(this.getRandomRolor(), -0.3);
        document.querySelector('.profile-pic').setAttribute('style', `background: ${randomColor}`)
    }
    render() {
        const {cookies} = this.props;
        return (
            <div className = {"my-profile"}>
                <div className = "profile-pic"><div className = "profile-pic-initial">{cookies.get('name')[0].toUpperCase()}</div></div>
                <div>{cookies.get('name')}</div>
            </div>
        );
    }
}

export default withCookies(MyProfile);