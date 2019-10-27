import React from 'react'
import { useRouter } from 'next/router'
import { JobInfo, JobDetails } from '../../../Elements'
import { JobDB } from '../../../DB/JobDB'

const Job = () => {
  const router = useRouter();
  const { id: passedID } = router.query;
  let passedJob = JobDB.filter(job => job.id == Number(passedID))[0]
  console.log(passedID);
  return (
    <JobInfo>
      <div>
        <h1> {passedJob ? passedJob.title : 'Job not found'}</h1>
        {passedJob && <button>Apply for Job</button>}
        {passedJob && <div>
          <div className="descTitle">Job Description</div>
          <JobDetails theme={{ fulltext: true }}>{passedJob.description}</JobDetails>
        </div>}
      </div>
    </JobInfo>
  )
}



export default Job