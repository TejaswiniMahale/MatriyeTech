
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div>
        <p className='dashboard_heading'>
          Hi, Welcome Matriyeee Software
        </p>
        <p className='dashboard_Subheading'>
          Dashboard
        </p>
      </div>
      <div className='dashboard_info f'>
        <div>
          <p className='text_center'>Apply for leave</p>
          <div className='f'>
            <p className='text-13 b-4'>Pending leave</p>
            <p >0</p>
          </div>
          <div className='f'>
            <p className='text-13 b-4'>Approved leave</p>
            <p>0</p>
          </div>
        </div>
        <div className='divider'></div>
        <div>
          <p className='text_center'>Purchase Course</p>
          <div className='f'>
            <p className='text-13 b-4'>Purchase</p>
            <p>3</p>
          </div>
          <div className='f'>
            <p className='text-13 b-4'>Completed</p>
            <p>0</p>
          </div>
        </div>
        <div className='divider'></div>
        <div>
          <p className='text_center'>Join Session</p>
          <div className='f'>
            <p className='text-13 b-4'>Processing</p>
            <p>2</p>
          </div>
          <div className='f'>
            <p className='text-13 b-4'>Accepted</p>
            <p>16</p>
          </div>
        </div>
        <div className='divider'></div>
        <div>
          <p className='text_center'>Mt Test</p>
          <div className='f'>
            <p className='text-13 b-4'>Total test</p>
            <p>0</p>
          </div>
        </div>
      </div>
      <div className='baches_box f'>
        <div className='box_bg' style={{width:"55%"}}>
          <div style={{padding:"20px"}}>
            <p style={{paddingBottom:"15px"}}>Available baches</p>
            <div className='f justify-between'>
            <div className='select-box'>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
            <div className='searchbar'>
              <input placeholder='Search'/>
              <SearchIcon/>
            </div>
          </div>
          </div>
          <div>
            <table className='baches-table'>
                <tr className='table_h'>
                  <th>Subject</th>
                  <th>Categaory</th>
                  <th>Batch</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              <tr>
                <td>Chemistry</td>
                <td>Academic</td>
                <td>
                  03 Jul 2023 To 31 Jul
                  <br/>
                  2023Batch-18
                </td>
                <td>
                  <button className='ongoing_btn'>On going</button>
                </td>
                <td>
                  <button className='join_btn'>Join</button>
                </td>
              </tr>
              <tr>
                <td>Chemistry</td>
                <td>Academic</td>
                <td>
                  03 Jul 2023 To 31 Jul
                  <br/>
                  2023Batch-18
                </td>
                <td>
                  <button className='ongoing_btn'>On going</button>
                </td>
                <td>
                  <button className='join_btn'>Join</button>
                </td>
              </tr>
            </table>
            <div className='line'></div>
          </div>
          <div className='f justify-between' style={{padding:"20px 20px"}}>
            <div>
              <p className='text-13 b-4'>Showing 1 to 2 of 2 entries</p>
            </div>
            <div className='f'>
              <p className='text-13 b-4'>Previous</p>
              <ChevronLeftIcon/>
              <p className='text-13 b-4'>1</p>
              <ChevronRightIcon/>
              <p className='text-13 b-4'>Next</p>
            </div>
          </div>
        </div>
        <div className='box_bg' style={{width:"45%"}}>
          <div style={{padding:"20px"}}>
            <p style={{paddingBottom:"15px"}}>Available baches</p>
            <div className='f justify-between'>
            <div className='select-box'>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
            <div className='searchbar'>
              <input placeholder='Search'/>
              <SearchIcon/>
            </div>
          </div>
          </div>
          <div>
            <table className='baches-table'>
                <tr className='table_h'>
                  <th>Subject Name</th>
                  <th>Batch</th>
                  <th>Status</th>
                </tr>
              <tr>
                <td>Chemistry</td>
                <td>
                  03 Jul 2023 To 31 Jul
                  <br/>
                  2023Batch-18
                </td>
                <td>
                  <button className='ongoing_btn'>On going</button>
                </td>
              </tr>
              <tr>
                <td>Chemistry</td>
                <td>
                  03 Jul 2023 To 31 Jul
                  <br/>
                  2023Batch-18
                </td>
                <td>
                  <button className='ongoing_btn'>On going</button>
                </td>
              </tr>
            </table>
            <div className='line'></div>
          </div>
          <div className='f justify-between' style={{padding:"20px 20px"}}>
            <div>
              <p className='text-13 b-4'>Showing 1 to 2 of 2 entries</p>
            </div>
            <div className='f'>
              <p className='text-13 b-4'>Previous</p>
              <ChevronLeftIcon/>
              <p className='text-13 b-4'>1</p>
              <ChevronRightIcon/>
              <p className='text-13 b-4'>Next</p>
            </div>
          </div>
        </div>
      </div>
      <div className='baches_box f' style={{gap:"20px"}}>
        <div style={{width:"70%"}} >
          <div style={{padding:"20px"}}>
            <p>Project Budget</p>
            <p style={{fontSize:"12px",fontWeight:"300"}}>
            The project budget is a tool used by project managers to estimate the total cost of a project.<br/>
            A project budget template includes a detailed estimate of all coasts.
            </p>
          </div>
          <div className='box_bg' style={{height:"50vh",}}>
            <div className='f' style={{justifyContent:"space-evenly",padding:"20px"}}>
              <p className='text-13 b-4'>Total Budget</p>
              <p className='text-13 b-4'>Amount Spent</p>
            </div>
          </div>
        </div>
        <div style={{width:"30%"}}>
          <div style={{padding:"20px"}}>
            <p>Project & task</p>
            <p style={{fontSize:"12px",fontWeight:"300"}}>
            The project budget is a tool used by project managers to estimate the total cost of a project.
            </p>
          </div>
          <div className='box_bg'>
            <table className='baches-table'>
              <tr className='table_h'>
                <th>Project & task</th>
                <th> Status</th>
              </tr>
              <tr>
                <td>Welcome Letter</td>
                <td><button className='task_btn completed'>Completed</button></td>
              </tr>
              <tr>
                <td>invoice</td>
                <td><button className='task_btn pending'>Pending</button></td>
              </tr>
              <tr>
                <td>invoice</td>
                <td><button className='task_btn canceled'>Cancel</button></td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td><button className='task_btn ongoing'>On going </button></td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td><button className='task_btn completed'>Completed</button></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className='f w-100 justify-between' style={{gap:"20px",paddingBottom:"20px",paddingTop:"20px"}}>
        <div className='task_boxex'>
          <div className='task-box-header bg-1' >
            <p>Task List</p>
          </div>
          <div >
          <table className='baches-table'>
              <tr>
                <td>Welcome Letter</td>
                <td><button className='task_btn completed'>Completed</button></td>
              </tr>
              <tr>
                <td>invoice</td>
                <td><button className='task_btn pending'>Pending</button></td>
              </tr>
              <tr>
                <td>invoice</td>
                <td><button className='task_btn canceled'>Cancel</button></td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td><button className='task_btn ongoing'>On going </button></td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td><button className='task_btn completed'>Completed</button></td>
              </tr>
            </table>
          </div>
        </div>
        <div className='task_boxex'>
          <div className='task-box-header bg-2'>
            <p>Task List</p>
          </div>
          <div >
          <table className='baches-table'>
              <tr>
                <td>Welcome Letter</td>
                <td><button className='task_btn completed'>Completed</button></td>
              </tr>
              <tr>
                <td>invoice</td>
                <td><button className='task_btn pending'>Pending</button></td>
              </tr>
              <tr>
                <td>invoice</td>
                <td><button className='task_btn canceled'>Cancel</button></td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td><button className='task_btn ongoing'>On going </button></td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td><button className='task_btn completed'>Completed</button></td>
              </tr>
            </table>
          </div>
        </div>
        <div className='task_boxex'>
          <div className='task-box-header bg-3'>
            <p>Task List</p>
          </div>
          <div >
          <table className='baches-table'>
              <tr>
                <td>Welcome Letter</td>
                <td><button className='task_btn completed'>Completed</button></td>
              </tr>
              <tr>
                <td>invoice</td>
                <td><button className='task_btn pending'>Pending</button></td>
              </tr>
              <tr>
                <td>invoice</td>
                <td><button className='task_btn canceled'>Cancel</button></td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td><button className='task_btn ongoing'>On going </button></td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td><button className='task_btn completed'>Completed</button></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className='f w-100 justify-between' style={{gap:"20px",paddingBottom:"20px"}}>
      <div className='task_boxex'>
          <div className='task-box-header bg-1'>
            <p>Task List</p>
          </div>
          <div >
          <table className='baches-table'>
              <tr>
                <td>Welcome Letter</td>
                <td><button className='task_btn completed'>Completed</button></td>
              </tr>
              <tr>
                <td>invoice</td>
                <td><button className='task_btn pending'>Pending</button></td>
              </tr>
              <tr>
                <td>invoice</td>
                <td><button className='task_btn canceled'>Cancel</button></td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td><button className='task_btn ongoing'>On going </button></td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td><button className='task_btn completed'>Completed</button></td>
              </tr>
            </table>
          </div>
        </div>
        <div className='task_boxex'>
          <div className='task-box-header bg-2'>
            <p>Task List</p>
          </div>
          <div >
          <table className='baches-table'>
              <tr>
                <td>Welcome Letter</td>
                <td><button className='task_btn completed'>Completed</button></td>
              </tr>
              <tr>
                <td>invoice</td>
                <td><button className='task_btn pending'>Pending</button></td>
              </tr>
              <tr>
                <td>invoice</td>
                <td><button className='task_btn canceled'>Cancel</button></td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td><button className='task_btn ongoing'>On going </button></td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td><button className='task_btn completed'>Completed</button></td>
              </tr>
            </table>
          </div>
        </div>
        <div className='task_boxex'>
          <div className='task-box-header bg-3'>
            <p>Task List</p>
          </div>
          <div >
          <table className='baches-table'>
              <tr>
                <td>Welcome Letter</td>
                <td><button className='task_btn completed'>Completed</button></td>
              </tr>
              <tr>
                <td>invoice</td>
                <td><button className='task_btn pending'>Pending</button></td>
              </tr>
              <tr>
                <td>invoice</td>
                <td><button className='task_btn canceled'>Cancel</button></td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td><button className='task_btn ongoing'>On going </button></td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td><button className='task_btn completed'>Completed</button></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard