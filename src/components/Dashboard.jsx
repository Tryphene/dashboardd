import React from 'react'
import { Col, Row } from 'react-bootstrap'
import paye from '../img/paye.png'
import facturer from '../img/facturer.png'
import supporter from '../img/supporter.png'
import patron from '../img/patron.png'
import compte from '../img/compte.png'
import { BsEye } from 'react-icons/bs'
import { BiMessage } from 'react-icons/bi'

const Dashboard = () => {
  return (
      <>
          <div className="d-flex justify-content-between my-3">
              <div className="">
                  <p className='fw-semibold my-0' style={{ fontSize: 30, color: "#676473" }}>
                      Tableau de bord
                  </p>
                  <p className="my-0 text-muted" style={{ fontSize: 14 }}>
                      Salut Andy! Bienvenue sur le facturier
                  </p>
              </div>
              <div className="d-flex">
                  <div class="rounded-4 my-0" style={{ width: 50, height: 50, border: "1px solid #E2E5EA", position: "relative", alignItems: "center" }}>
                      <div className="d-flex justify-content-center pt-3" style={{alignItems: 'center'}}>
                          <BiMessage />
                      </div>
                      <div className="py-1 px-2" style={{position: "absolute", top: -10, backgroundColor: "#28C76F", borderRadius: "100%", right: -5, fontSize: 10, color: "white"}}>15</div>
                  </div>
                  <div class="rounded-4 my-0 mx-3" style={{ width: 50, height: 50, border: "1px solid #E2E5EA", position: "relative", alignItems: "center" }}>
                      <div className="d-flex justify-content-center pt-3" style={{alignItems: 'center'}}>
                          <BiMessage />
                      </div>
                      <div className="py-1 px-2" style={{position: "absolute", top: -10, backgroundColor: "#FF3F40", borderRadius: "100%", right: -5, fontSize: 10, color: "white"}}>15</div>
                  </div>
                  <div className="d-flex">
                      <div class="rounded-5 my-0 ms-5 me-3" style={{ width: 50, backgroundColor: "#D7F5E7", height: 50, border: "1px solid #E2E5EA", position: "relative", alignItems: "center" }}>
                          <div className="d-flex justify-content-center pt-1" style={{ alignItems: 'center' }}>
                              <img src={patron} width={40} alt="" />
                          </div>
                      <div className="p-2" style={{position: "absolute", top: 39, backgroundColor: "#28C76F", borderRadius: "100%", right: 3, fontSize: 10, color: "white"}}></div>
                  </div>
                      <div className="">
                          <p className="my-0 fw-semibold" style={{fontSize: 15}}>Andy Koffi</p>
                          <p className="my-0 text-muted" style={{fontSize: 12}}>Utilisateur</p>
                      </div>
                  </div>
              </div>
          </div>
          <Row className="mt-5">
              <Col xs={12} sm={12} md={6} lg={3}>
                  <div className="d-flex justify-content-evenly p-2 rounded-3" style={{ color: "black.", with: "auto", backgroundColor: "#F7EDE4" }}>
                      <div className="p-3" style={{ with: "auto", borderRadius:"100%", backgroundColor: "white" }}>
                          <img src={compte} width={60} alt="" />
                      </div>
                      <div className="m">
                          <p className="mt-1 mb-0" style={{ fontSize: 16 }}>Nombre de facturier</p>
                          <p className="fw-bolder mt-0" style={{fontSize: 37}}>+ 75</p>
                      </div>
                  </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                  <div className="d-flex justify-content-evenly p-2 rounded-3" style={{ color: "black.", with: "auto", backgroundColor: "#E9F3E8" }}>
                      <div className="p-3" style={{ with: "auto", borderRadius:"100%", backgroundColor: "white" }}>
                          <img src={supporter} width={60} alt="" />
                      </div>
                      <div className="m">
                          <p className="mt-1 mb-0" style={{ fontSize: 16 }}>Nombre de client</p>
                          <p className="fw-bolder mt-0" style={{fontSize: 37}}>430</p>
                      </div>
                  </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                  <div className="d-flex justify-content-evenly p-2 rounded-3" style={{ color: "black.", with: "auto", backgroundColor: "#E3E7EF" }}>
                      <div className="p-3" style={{ with: "auto", borderRadius:"100%", backgroundColor: "white" }}>
                          <img src={facturer} width={60} alt="" />
                      </div>
                      <div className="m">
                          <p className="mt-1 mb-0" style={{ fontSize: 16 }}>Facture Payée</p>
                          <p className="fw-bolder mt-0" style={{fontSize: 37}}>465</p>
                      </div>
                  </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                  <div className="d-flex justify-content-evenly p-2 rounded-3" style={{ color: "black", with: "auto", backgroundColor: "#EFE3E9" }}>
                      <div className="p-3" style={{ with: "auto", borderRadius: "100%", backgroundColor: "white" }}>
                          <img src={paye} width={60} alt="" />
                      </div>
                      <div className="m">
                          <p className="my-0" style={{ fontSize: 16 }}>Montant Facture</p>
                          <p className="fw-bolder my-0" style={{ fontSize: 37 }}>1000 F</p>
                          <p className='my-0'>(Année)</p>
                      </div>
                  </div>
              </Col>
          </Row>
          <Row className='mt-5'>
              <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="p-3 rounded-3" style={{backgroundColor: "white"}}>
                      <p style={{fontSize: 20}} className='fw-bolder my-0'>Factures Disponibles</p>
                      <p style={{ fontSize: 14 }} className='text-muted my-0'>La liste des factures déposés par les facturiers</p>
                      <div class="table-responsive mt-4">
                          <table class="table">
                              <thead>
                                  <tr>
                                      <th scope="col">Descriptif</th>
                                      <th scope="col">Période Facturée</th>
                                      <th scope="col">Montant Payé</th>
                                      <th scope="col">Date Limite</th>
                                      <th scope="col"></th>
                                      <th scope="col"></th>
                                  </tr>
                              </thead>
                            <tbody>
                                <tr>
                                      <td className='align-middle'>
                                          <div className="d-flex">
                                              <input type="checkbox" style={{width: 17}} />
                                              <img className='mx-3 rounded-2' src={facturer} width={40} alt="" />
                                              <div className="">
                                                  <p style={{fontSize: 20}} className="my-0 fw-semibold">Abonnement Canal +</p>
                                                  <p style={{fontSize: 13}} className="my-0 text-muted">Canal plus afrique</p>
                                              </div>
                                          </div>
                                      </td>
                                      <td className='align-middle text-muted' style={{fontSize: 13}}>25-04-2023</td>
                                      <td className='align-middle'>35 000 FCFA</td>
                                      <td className='align-middle text-muted' style={{fontSize: 13}}>15-05-2023</td>
                                      <td className='align-middle'><BsEye size={30} color='#A05C35' /></td>
                                      <td className='align-middle'>
                                          <p className='rounded-5 p-1 text-center' style={{ backgroundColor: "#DF2626", color: "white" }}>
                                              Nouvelle
                                          </p>
                                      </td>
                                  </tr>
                                <tr>
                                      <td className='align-middle'>
                                          <div className="d-flex">
                                              <input type="checkbox" style={{width: 17}} />
                                              <img className='mx-3 rounded-2' src={facturer} width={40} alt="" />
                                              <div className="">
                                                  <p style={{fontSize: 20}} className="my-0 fw-semibold">Facture d'électricité</p>
                                                  <p style={{fontSize: 13}} className="my-0 text-muted">Compagnie Ivoirienne d'Electicité</p>
                                              </div>
                                          </div>
                                      </td>
                                      <td className='align-middle text-muted' style={{fontSize: 13}}>25-04-2023</td>
                                      <td className='align-middle'>35 000 FCFA</td>
                                      <td className='align-middle text-muted' style={{fontSize: 13}}>15-05-2023</td>
                                      <td className='align-middle'><BsEye size={30} color='#A05C35' /></td>
                                      <td className='align-middle'>
                                          <p className='rounded-5 p-1 text-center' style={{ backgroundColor: "#DF2626", color: "white" }}>
                                              Nouvelle
                                          </p>
                                      </td>
                                  </tr>
                                <tr>
                                      <td className='align-middle'>
                                          <div className="d-flex">
                                              <input type="checkbox" style={{width: 17}} />
                                              <img className='mx-3 rounded-2' src={facturer} width={40} alt="" />
                                              <div className="">
                                                  <p style={{fontSize: 20}} className="my-0 fw-semibold">Facture d'eau</p>
                                                  <p style={{fontSize: 13}} className="my-0 text-muted">SODECI</p>
                                              </div>
                                          </div>
                                      </td>
                                      <td className='align-middle text-muted' style={{fontSize: 13}}>25-04-2023</td>
                                      <td className='align-middle'>35 000 FCFA</td>
                                      <td className='align-middle text-muted' style={{fontSize: 13}}>15-05-2023</td>
                                      <td className='align-middle'><BsEye size={30} color='#A05C35' /></td>
                                      <td className='align-middle'>
                                          <p className='rounded-5 p-1 text-center' style={{ backgroundColor: "#DF2626", color: "white" }}>
                                              Nouvelle
                                          </p>
                                      </td>
                                  </tr>
                                <tr>
                                      <td className='align-middle'>
                                          <div className="d-flex">
                                              <input type="checkbox" style={{width: 17}} />
                                              <img className='mx-3 rounded-2' src={facturer} width={40} alt="" />
                                              <div className="">
                                                  <p style={{fontSize: 20}} className="my-0 fw-semibold">Abonnement Internet</p>
                                                  <p style={{fontSize: 13}} className="my-0 text-muted">Orange Côte d'Ivoire</p>
                                              </div>
                                          </div>
                                      </td>
                                      <td className='align-middle text-muted' style={{fontSize: 13}}>25-04-2023</td>
                                      <td className='align-middle'>35 000 FCFA</td>
                                      <td className='align-middle text-muted' style={{fontSize: 13}}>15-05-2023</td>
                                      <td className='align-middle'><BsEye size={30} color='#A05C35' /></td>
                                      <td className='align-middle'>
                                          <p className='rounded-5 p-1 text-center' style={{ backgroundColor: "#EAEAEA", color: "black" }}>
                                              Ancienne
                                          </p>
                                      </td>
                                  </tr>
                                <tr>
                                      <td className='align-middle'>
                                          <div className="d-flex">
                                              <input type="checkbox" style={{width: 17}} />
                                              <img className='mx-3 rounded-2' src={facturer} width={40} alt="" />
                                              <div className="">
                                                  <p style={{fontSize: 20}} className="my-0 fw-semibold">Facture Startimes</p>
                                                  <p style={{fontSize: 13}} className="my-0 text-muted">Startimes Côte d'Ivoire</p>
                                              </div>
                                          </div>
                                      </td>
                                      <td className='align-middle text-muted' style={{fontSize: 13}}>25-04-2023</td>
                                      <td className='align-middle'>35 000 FCFA</td>
                                      <td className='align-middle text-muted' style={{fontSize: 13}}>15-05-2023</td>
                                      <td className='align-middle'><BsEye size={30} color='#A05C35' /></td>
                                      <td className='align-middle'>
                                          <p className='rounded-5 p-1 text-center' style={{ backgroundColor: "#EAEAEA", color: "black" }}>
                                              Ancienne
                                          </p>
                                      </td>
                                  </tr>
                                  
                            </tbody>
                            </table>
                      </div>
                  </div>
              </Col>
          </Row>
          <Row className='my-5'>
              <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="p-3 rounded-3" style={{backgroundColor: "white"}}>
                      <p style={{fontSize: 20}} className='fw-bolder my-0'>Les Factures Impayées</p>
                      <p style={{ fontSize: 14 }} className='text-muted my-0'>La liste des factures impayées et en attente de paiement</p>
                      <div class="table-responsive mt-4">
                          <table class="table">
                              <thead>
                                  <tr>
                                      <th scope="col">Nom Client</th>
                                      <th scope="col">Facture</th>
                                      <th scope="col">Montant à Payé</th>
                                      <th scope="col">Date Limite</th>
                                      <th scope="col"></th>
                                      <th scope="col"></th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td className='align-middle'>
                                          <div className="d-flex">
                                              <input type="checkbox" style={{width: 14}} />
                                              <p className='mt-3 ms-3 text-muted'>Herve Koffi</p>
                                          </div>
                                      </td>
                                      <td className='align-middle'>
                                          <div className="d-flex">
                                              <img className='me-3 rounded-2' src={facturer} width={40} alt="" />
                                              <div className="">
                                                  <p style={{fontSize: 20}} className="my-0 fw-semibold">Abonnement Canal +</p>
                                                  <p style={{fontSize: 13}} className="my-0 text-muted">Canal plus afrique</p>
                                              </div>
                                          </div>
                                      </td>
                                      <td className='align-middle'>35 000 FCFA</td>
                                      <td className='align-middle text-muted' style={{fontSize: 13}}>15-05-2023</td>
                                      <td className='align-middle'><BsEye size={30} color='#A05C35' /></td>
                                      <td className='align-middle'>
                                          <p className='rounded-5 p-1 text-center' style={{ backgroundColor: "#FBDFC2", color: "#A05C35" }}>
                                              Payer
                                          </p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td className='align-middle'>
                                          <div className="d-flex">
                                              <input type="checkbox" style={{width: 14}} />
                                              <p className='mt-3 ms-3 text-muted'>Herve Koffi</p>
                                          </div>
                                      </td>
                                      <td className='align-middle'>
                                          <div className="d-flex">
                                              <img className='me-3 rounded-2' src={facturer} width={40} alt="" />
                                              <div className="">
                                                  <p style={{fontSize: 20}} className="my-0 fw-semibold">Abonnement Canal +</p>
                                                  <p style={{fontSize: 13}} className="my-0 text-muted">Canal plus afrique</p>
                                              </div>
                                          </div>
                                      </td>
                                      <td className='align-middle'>35 000 FCFA</td>
                                      <td className='align-middle text-muted' style={{fontSize: 13}}>15-05-2023</td>
                                      <td className='align-middle'><BsEye size={30} color='#A05C35' /></td>
                                      <td className='align-middle'>
                                          <p className='rounded-5 p-1 text-center' style={{ backgroundColor: "#FBDFC2", color: "#A05C35" }}>
                                              Payer
                                          </p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td className='align-middle'>
                                          <div className="d-flex">
                                              <input type="checkbox" style={{width: 14}} />
                                              <p className='mt-3 ms-3 text-muted'>Herve Koffi</p>
                                          </div>
                                      </td>
                                      <td className='align-middle'>
                                          <div className="d-flex">
                                              <img className='me-3 rounded-2' src={facturer} width={40} alt="" />
                                              <div className="">
                                                  <p style={{fontSize: 20}} className="my-0 fw-semibold">Abonnement Canal +</p>
                                                  <p style={{fontSize: 13}} className="my-0 text-muted">Canal plus afrique</p>
                                              </div>
                                          </div>
                                      </td>
                                      <td className='align-middle'>35 000 FCFA</td>
                                      <td className='align-middle text-muted' style={{fontSize: 13}}>15-05-2023</td>
                                      <td className='align-middle'><BsEye size={30} color='#A05C35' /></td>
                                      <td className='align-middle'>
                                          <p className='rounded-5 p-1 text-center' style={{ backgroundColor: "#FBDFC2", color: "#A05C35" }}>
                                              Payer
                                          </p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td className='align-middle'>
                                          <div className="d-flex">
                                              <input type="checkbox" style={{width: 14}} />
                                              <p className='mt-3 ms-3 text-muted'>Herve Koffi</p>
                                          </div>
                                      </td>
                                      <td className='align-middle'>
                                          <div className="d-flex">
                                              <img className='me-3 rounded-2' src={facturer} width={40} alt="" />
                                              <div className="">
                                                  <p style={{fontSize: 20}} className="my-0 fw-semibold">Facture Startimes</p>
                                                  <p style={{fontSize: 13}} className="my-0 text-muted">Startimes Côte d'Ivoire</p>
                                              </div>
                                          </div>
                                      </td>
                                      <td className='align-middle'>35 000 FCFA</td>
                                      <td className='align-middle text-muted' style={{fontSize: 13}}>15-05-2023</td>
                                      <td className='align-middle'><BsEye size={30} color='#A05C35' /></td>
                                      <td className='align-middle'>
                                          <p className='rounded-5 p-1 text-center' style={{ backgroundColor: "#FBDFC2", color: "#A05C35" }}>
                                              Payer
                                          </p>
                                      </td>
                                  </tr>
                            </tbody>
                            </table>
                      </div>
                  </div>
              </Col>
          </Row>
      
    </>
  )
}

export default Dashboard
