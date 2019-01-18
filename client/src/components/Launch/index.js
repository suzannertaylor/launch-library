import React from 'react'
import PropTypes from "prop-types"
import Wiki from '../Wiki'

const Launch = ({ launch }) => (
    <div className='card card-1'>
        <div>
            <h2>{ launch.name }</h2>
            <p>Launch Date: <time dateTime={ launch.windowstart }>{ launch.windowstart }</time></p>
        </div>
        <div>
            <p>
                Rocket Type: <Wiki 
                    path={ launch.rocket.wikiURL }
                    name={ launch.rocket.name }
                />
            </p>
            <p>Launch Location: { launch.location.pads && launch.location.pads[0] ? launch.location.pads[0].name : launch.location.name }</p>
            <p>
                Launch Agency: <Wiki 
                    path={ launch.lsp.wikiURL }
                    name={ launch.lsp.name }
                />
            </p>
            { launch.missions && launch.missions[0] ? (
                <p>
                    Mission: { launch.missions[0].description } &nbsp;
                    { launch.missions[0].wikiURL ? (
                        <Wiki 
                            path={ launch.missions[0].wikiURL }
                            name={ launch.missions[0].name }
                        />
                    ) : ''
                    }
                </p>
            ) : ''
            }
        </div>
    </div>

)

Launch.propTypes = {
    launch: PropTypes.object,
}

export default Launch