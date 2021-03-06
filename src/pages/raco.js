import React, { Component } from "react"
import PhoneScreenRaco from "../components/phonescreenraco"
import AppDetailsRaco from "../components/appdetailsraco"
import Cursor from "../components/cursor"
import Header from "../components/header"
import IndexStyles from "../styles/index.module.scss"
import { Blob } from "react-blob"
import {RotateScale} from 'styled-loaders-react'





class App extends Component{
  
  state = {
    loading: true
  }

  componentDidMount = () => {
    document.title = "Salim Bouhorma Mouffak"
    setTimeout(() => {
      this.setState({
        loading:false
      })
    }, 1500)
  }
  
  
  
  render(){
    return <div className ={IndexStyles.div}>
            {
              this.state.loading ? <RotateScale size = "400px" color="#20356B"/> : 
              <>
                <Cursor />
                <section className ={IndexStyles.section}>
                <Header/> 
                <Blob size="2000px"
                  style={{
                      position: 'absolute',
                      top: '0%',
                      left: '30%',
                      zIndex: -1,
                      backgroundColor: 'white',
                      color: 'white',
                      opacity: 0.5,
                      fontSize: '50vh',
                      marginbottom: '100px',
                    }}
                  animationDuration="60s"
                />
                <PhoneScreenRaco/>
                </section>
                <AppDetailsRaco/>
              </>
            }

      </div>
    
  };

}

export default App

