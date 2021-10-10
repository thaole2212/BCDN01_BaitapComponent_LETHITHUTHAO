import React, { Component } from 'react'
import BannerComponent from './BannerComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ItemComponent from './ItemComponent'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                
                    <div >
                        {/*header component  */}
                        <HeaderComponent/>
                    </div>
                    <div >
                        
                        <BannerComponent/>
                    </div>
                    <div>
                        <ItemComponent/>

                    </div>
                    <div>
                        <FooterComponent/>
                    </div>
                
                </div>
            </div>
        )
    }
}
