import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className='edubox'>
      <table className='eduTable'>
        <tr className='eduTr'>
          <td className='eduTd'>
            <div className="container1">
              <p className='SchoolTitle'><img src="./images/srm.png" alt="" srcset="" /> <span className='SchoolName'> Under Graduation</span></p>

              <div className='eduOne'>
                <div className='eduOne1'>
                  <p class="eduPara">College : SRM TRP ENGINEERING COLLEGE</p>
                  <p class="eduPara">Degree : Bachelor of Engineering in Mechanical </p>
                  <p class="eduPara">Year of Passed Out : 2021</p>
                  <p class="eduPara">Location : Trichy, TN</p>
                </div>

                <div className="eduTwo">
                  <p class="eduPara"><h1 class="eduH1">Scored CGPA 7.83</h1></p>
                  <p class="eduLink"><a href="https://trp.srmtrichy.edu.in/" class="eduOne11">VISIT</a></p>
                </div>
              </div>
            </div>
          </td>

          <td className='eduTd'>
            <div className="container1">
              <p className='SchoolTitle'><img src="./images/vvhss.png" alt="" srcset="" /> <span className='SchoolName'>Higher  Education</span></p>

              <div className='eduOne'>
                <div className='eduOne1'>
                  <p class="eduPara">School : Vidyaa Vikas Matric Hr. School</p>
                  <p class="eduPara">Major : Computer Science </p>
                  <p class="eduPara">Year of Passed Out : 2017</p>
                  <p class="eduPara">Location : Tanjore, TN</p>
                </div>

                <div className="eduTwo">
                  <p class="eduPara"><h1 class="eduH1">Percentage : 75%</h1></p>
                  <p class="eduLink"><a href="https://thanjai.vidyaavikas.ac.in/" class="eduOne11">VISIT</a></p>
                </div>
              </div>
            </div>
          </td>

          <td className='eduTd'>
            <div className="container1">
              <p className='SchoolTitle'><img src="./images/abps.png" alt="" srcset="" /> <span className='SchoolName'> Secondary Education</span></p>

              <div className='eduOne'>
                <div className='eduOne1'>
                  <p class="eduPara">School : The Aditya Birla Public School</p>
                  <p class="eduPara">Major : Science and Maths  </p>
                  <p class="eduPara">Year of Passed Out : 2015</p>
                  <p class="eduPara">Location : Ariyalur, TN</p>
                </div>

                <div className="eduTwo">
                  <p class="eduPara"><h1 class="eduH1">Scored CGPA 8.00</h1></p>
                  <p class="eduLink"><a href="https://adityabirlaschools.co.in" class="eduOne11">VISIT</a></p>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
      
    </div>
  )
}

export default Education;