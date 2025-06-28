import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div>
        <div className="dashboard">
            <div className="main">
                <div className="card welcome">
                    <div>
                        <h2>Welcome Back!</h2>
                        <p>Have You Had a Routine Health Check this Month?</p>
                        <button>Check Now</button>
                    </div>
                    <img src="/profile.gif" alt="Doctor" />
        
                </div>
                <div className="card stats">
                    <div className="stat">
                        <i className='bx bxs-heart'></i>
                        <h3>Heart Rate</h3>
                        <p>80 beats/min</p>
                    </div>
                    <div className="stat">
                        <i className="fa-solid fa-lungs"></i>
                        <h3>Lung Capacity</h3>
                        <p>4.75 liters</p>
                    </div>
                    <div className="stat">
                        <i className="fa-solid fa-droplet"></i>
                        <h3>Blood Cells</h3>
                        <p>5 million/ml</p>
                    </div>
                </div>
                <div className="chart">
                    {/* <!-- Body Fluid Composition chart --> */}
                    <div className="chart-card">
                        <h3>Body Fluid Composition</h3>
                        <div className="chart-container">
  <div className="bar-group">
    <div className="bar extracellular" style={{ height: '20%' }}></div>
    <div className="bar intracellular" style={{ height: '30%' }}></div>
    <div className="bar mineral" style={{ height: '5%' }}></div>
  </div>
  <div className="bar-group">
    <div className="bar extracellular" style={{ height: '22%' }}></div>
    <div className="bar intracellular" style={{ height: '32%' }}></div>
    <div className="bar mineral" style={{ height: '6%' }}></div>
  </div>
  <div className="bar-group">
    <div className="bar extracellular" style={{ height: '25%' }}></div>
    <div className="bar intracellular" style={{ height: '35%' }}></div>
    <div className="bar mineral" style={{ height: '7%' }}></div>
  </div>
  <div className="bar-group">
    <div className="bar extracellular" style={{ height: '23%' }}></div>
    <div className="bar intracellular" style={{ height: '33%' }}></div>
    <div className="bar mineral" style={{ height: '6%' }}></div>
  </div>
  <div className="bar-group">
    <div className="bar extracellular" style={{ height: '26%' }}></div>
    <div className="bar intracellular" style={{ height: '36%' }}></div>
    <div className="bar mineral" style={{ height: '8%' }}></div>
  </div>
</div>

                        <div className="x-axis">
                            <div>Week 1</div>
                            <div>Week 2</div>
                            <div>Week 3</div>
                            <div>Week 4</div>
                            <div>Week 5</div>
                        </div>
                        <div className="legend">
                            <div className="legend-item">
                                <div className="legend-color extracellular"></div>
                                <span>Extracellular</span>
                            </div>
                            <div className="legend-item">
                                <div className="legend-color intracellular"></div>
                                <span>Intracellular</span>
                            </div>
                            <div className="legend-item">
                                <div className="legend-color mineral"></div>
                                <span>Mineral</span>
                            </div>
                        </div>
                    </div>
        
                    <div className="charts-container">
                        {/* <!-- Composition of Solids - CSS Pie Chart --> */}
                        <div className="card chart-card">
                            <h3>Composition of Solids</h3>
                            <div className="pie-chart-container">
                                <div className="pie-chart">
                                    <div className="slice slice1"></div>
                                    <div className="slice slice2"></div>
                                    <div className="slice slice3"></div>
                                </div>
                            </div>
                            <div className="chart-legend">
                                <div className="legend-item">
                                    <span className="color-box protein"></span>
                                    <span>Protein 30%</span>
                                </div>
                                <div className="legend-item">
                                    <span className="color-box carbohydrates"></span>
                                    <span>Carbohydrates 50%</span>
                                </div>
                                <div className="legend-item">
                                    <span className="color-box fat"></span>
                                    <span>Fat 20%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar">
                <div className="card calendar">
                    <h3>Upcoming Check Up</h3>
                    <table>
                     <thead>
                        <tr>
                            <th>Mo</th>
                            <th>Tu</th>
                            <th>We</th>
                            <th>Th</th>
                            <th>Fr</th>
                            <th>Sa</th>
                            <th>Su</th>
                        </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>1</td>
                              <td>2</td>
                              <td>3</td>
                              <td>4</td>
                              <td>5</td>
                              <td>6</td>
                              <td>7</td>
                           </tr>
                           <tr>
                              <td>8</td>
                              <td>9</td>
                              <td>10</td>
                              <td>11</td>
                              <td>12</td>
                              <td>13</td>
                              <td>14</td>
                           </tr>
                           <tr>
                              <td>15</td>
                              <td>16</td>
                              <td className="highlight">17</td>
                              <td>18</td>
                              <td>19</td>
                              <td>20</td>
                              <td>21</td>
                           </tr>
                           <tr>
                              <td>22</td>
                              <td>23</td>
                              <td>24</td>
                              <td>25</td>
                              <td>26</td>
                              <td>27</td>
                              <td>28</td>
                           </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card">
                    <h3>Your Last Health Check</h3>
                    <ul className="check-list">
                        <li>Dental Health</li>
                        <li>Brain O2 Test</li>
                        <li>Regular Kidney Check</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Insurance Balance</h3>
                    <p className="insurance-balance">₹24,000</p>
                </div>
                <div className="card">
                    <h3>Notes</h3>
                    <p className="insurance-balance">Headache,Knee Pain</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Profile
