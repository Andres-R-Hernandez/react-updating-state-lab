import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor() {
        super();
        this.state={
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    handleClick1 = () => {
        this.setState(prevState=>{
            return {
                settings: {
                    ...prevState.settings,
                    bitrate: 12
                }
            }
        })
    }

    handleClick2 = () => {
        this.setState(prevState=>{
            return {
                settings: {
                    ...prevState.settings,
                    video: {
                        resolution: '720p'
                      }                  
                }
            }
        })
    }
    
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleClick1}>bitrate</button>
                <button className="resolution" onClick={this.handleClick2}>resolution</button>
            </div>
        )
    }
}
