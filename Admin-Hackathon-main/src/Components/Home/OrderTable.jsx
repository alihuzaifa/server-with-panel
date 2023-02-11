import React from "react";
import "../Style/OrderTable.css";

const OrderTable = () => {
  return (
    <>
      <section className="intro">
        <div className="gradient-custom-2 mb-5">
          <div className="mask d-flex align-items-center">
            <div className="container-fluid">
              <div className="row text-center">
                <div className="col h2 text-white text-decoration-underline">
                  Available Order
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table table-dark table-bordered mb-0">
                      <thead>
                        <tr>
                          <th scope="col">EMPLOYEES</th>
                          <th scope="col">POSITION</th>
                          <th scope="col">CONTACTS</th>
                          <th scope="col">AGE</th>
                          <th scope="col">ADDRESS</th>
                          <th scope="col">SALARY</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Tiger Nixon</th>
                          <td>System Architect</td>
                          <td>tnixon12@example.com</td>
                          <td>61</td>
                          <td>Edinburgh</td>
                          <td>$320,800</td>
                        </tr>
                        <tr>
                          <th scope="row">Sonya Frost</th>
                          <td>Software Engineer</td>
                          <td>sfrost34@example.com</td>
                          <td>23</td>
                          <td>Edinburgh</td>
                          <td>$103,600</td>
                        </tr>
                        <tr>
                          <th scope="row">Jena Gaines</th>
                          <td>Office Manager</td>
                          <td>jgaines75@example.com</td>
                          <td>30</td>
                          <td>London</td>
                          <td>$90,560</td>
                        </tr>
                        <tr>
                          <th scope="row">Quinn Flynn</th>
                          <td>Support Lead</td>
                          <td>qflyn09@example.com</td>
                          <td>22</td>
                          <td>Edinburgh</td>
                          <td>$342,000</td>
                        </tr>
                        <tr>
                          <th scope="row">Charde Marshall</th>
                          <td>Regional Director</td>
                          <td>cmarshall28@example.com</td>
                          <td>36</td>
                          <td>San Francisco</td>
                          <td>$470,600</td>
                        </tr>
                        <tr>
                          <th scope="row">Haley Kennedy</th>
                          <td>Senior Marketing Designer</td>
                          <td>hkennedy63@example.com</td>
                          <td>43</td>
                          <td>London</td>
                          <td>$313,500</td>
                        </tr>
                        <tr>
                          <th scope="row">Tatyana Fitzpatrick</th>
                          <td>Regional Director</td>
                          <td>tfitzpatrick00@example.com</td>
                          <td>19</td>
                          <td>Warsaw</td>
                          <td>$385,750</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderTable;