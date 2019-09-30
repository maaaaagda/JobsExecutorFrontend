import React, { Component } from "react"
import { connect } from "react-redux"

type JobsListState = {}
type JobsListProps = { jobs: { name: string }[] }

class JobsList extends Component<JobsListProps, JobsListState> {
    componentDidMount() {}

    render() {
        console.log("Gsgwe", this.props.jobs)
        return this.props.jobs.map(job => {
            return <div>{job.name}</div>
        })
    }
}
const mapStateToProps = (state: any) => {
    return { jobs: state.jobs.jobsList }
}
export default connect(mapStateToProps)(JobsList)
