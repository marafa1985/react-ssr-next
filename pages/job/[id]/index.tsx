import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import ThemeContext from '../../../Context/ThemeContext'
import { JobInfo, JobDetails } from '../../../Elements'
import { JobDB } from '../../../DB/JobDB'


const Job = () => {
  const router = useRouter();
  const { id: passedID } = router.query;
  let passedJob = JobDB.filter(job => job.id == Number(passedID))[0]
  console.log(passedID);
  return (
    <ThemeContext>
      <JobInfo>
        <div>
          <Link href='/'><a title="Job List">&larr; Back</a></Link>
          <h1> {passedJob ? passedJob.title : 'Job not found'}</h1>
          {passedJob && <button>Apply for Job</button>}
          {passedJob && <div>
            <div className="descTitle">Job Description</div>
            <JobDetails theme={{ fulltext: true }}>{passedJob.description}</JobDetails>
          </div>}
        </div>
      </JobInfo>
    </ThemeContext>
  )
}



export default Job