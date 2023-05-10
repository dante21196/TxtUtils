import React from 'react'
import PropTypes from 'prop-types'

export default function Alert(props) {
  return (
    <div style={{height:'100px'}}>
    { props.alert && <div className="alert alert-success alert-dismissible fade show my-3" role="alert">
  <strong>{props.alert.type}</strong>{props.alert.msg} 
</div>}
</div>
  )
}
