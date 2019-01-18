import React, { Component } from "react"
import { connect } from "react-redux"
import Pagination from "react-js-pagination";
import { fetchLaunches } from "../../actions"

import Launch from "../Launch"

class LaunchList extends Component { 

    constructor(props) {
		super(props);

		this.handlePageChanged = this.handlePageChanged.bind(this);

		this.state = {
			visiblePage: 5,
            itemsCountPerPage: 10,
            currentPage: 1,
        }

        this.handlePageChanged = this.handlePageChanged.bind(this)
	}

    componentDidMount() {
        this.props.fetchLaunches(1)
    }

    handlePageChanged(nextPage) {
        this.props.fetchLaunches(nextPage)
        this.setState({currentPage: nextPage})
	}

    render() {
        const { launches, totalItems, itemsCountPerPage } = this.props
        return (
            <div className="row content">
                <div className='col-lg-10 text-center'>
                    <h3>Upcoming Launches</h3>
                </div>
                { launches.length > 0 ? (
                    <div id="mission-list" className="col-lg-10">
                        <div className='text-center'>
                            <Pagination
                                activePage={ this.state.currentPage }
                                itemsCountPerPage={ itemsCountPerPage }
                                totalItemsCount={ totalItems }
                                pageRangeDisplayed={ this.state.visiblePage }
                                onChange={ this.handlePageChanged }
                            />
                        </div>
                        <ul>
                            { launches.map((launch) => {
                                return <li key={launch.id}>
                                    <Launch
                                        launch={launch}
                                    />
                                </li>
                            })}
                        </ul>
                        <div className='text-center'>
                            <Pagination
                                activePage={ this.state.currentPage }
                                itemsCountPerPage={ this.state.itemsCountPerPage }
                                totalItemsCount={ totalItems }
                                pageRangeDisplayed={ this.state.visiblePage }
                                onChange={ this.handlePageChanged }
                            />
                        </div>
                    </div>
                ) : (
                    <div>
                        <p>There are no launch entries</p>
                    </div>
                ) }
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    let launches = []
    let totalItems = 0

    if(typeof state.launch.launches !== 'undefined' && typeof state.launch.launches.launches !== 'undefined') {
        launches = state.launch.launches.launches
        totalItems = state.launch.launches.total
    } 
    console.log(launches)
    return { 
        launches,
        totalItems,
    }
}

const  mapDispatchToProps = (dispatch) => {
    return {
        fetchLaunches: (nextPage) => dispatch(fetchLaunches(nextPage)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchList)