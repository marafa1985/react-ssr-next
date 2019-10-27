import React, { Component } from 'react'
import Link from 'next/link';
import { JobsGrid, JobHeader, JobDetails } from '../Elements'
import { IJobItem } from '../Types/Types'
import SearchBar from './SearchBar';


interface IProps {
  jobList: IJobItem[]
}

interface IState {
  jobList: IJobItem[]
}

class JobList extends Component<IProps, IState> {
  constructor(props) {
    super(props)

    this.state = {
      jobList: [...this.props.jobList]
    }
  }
  filterJobList = (searchValue) => {
    if (searchValue) {
      let newJobList = this.state.jobList.filter(job => job.description.includes(searchValue))
      this.setState({
        jobList: [...newJobList]
      })
    } else {
      this.setState({
        jobList: [...this.props.jobList]
      })
    }
  }
  render() {
    let { jobList } = this.state;
    return (
      <div>
        <SearchBar onFilterJob={this.filterJobList.bind(this)} />

        {jobList.length === 0 ? <span>No job found</span> : <JobsGrid>
          <li>{jobList.length} jobs found</li>
          {
            jobList.map((job: IJobItem) => {
              return (
                <li key={job.id} >
                  <div>
                    <JobHeader>
                      <Link href='/job/[id]'  as={`/job/${job.id}`}  >
                        <a title={job.title}>{job.title}</a>
                      </Link>
                      <span>{job.employment_type}</span></JobHeader>
                    <JobDetails>{job.description}</JobDetails>
                  </div>
                </li>
              )
            })
          }
        </JobsGrid>}
      </div>
    )
  }
}

export default JobList
