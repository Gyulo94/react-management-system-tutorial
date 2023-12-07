import React from 'react'

const Customer = (props) => {
  return (
    <div>
        <CustomerProfile id={props.id} image={props.image} name={props.name} />
        <CustomerInfo birthday={props.birthday} sex={props.sex} job={props.job} />
    </div>
  )
}

const CustomerProfile = (props) => {
    return (
      <>
        <img src={props.image} alt="image" />
        <h2>{props.name}({props.id})</h2>
      </>
    )
  }

const CustomerInfo = (props) => {
  return (
    <>
      <p>{props.birthday}</p>
      <p>{props.sex}</p>
      <p>{props.job}</p>
    </>
  )
}

export default Customer;