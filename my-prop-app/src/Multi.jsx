import React from 'react'

const Multi = ({multi}) => {
    let acceptvalue = multi();
  return (
    <div>
      <h2>
        Multi = {multi}
      </h2>
      <h2>multiply direct call = {multi()}</h2>
    </div>
  )
}

export default Multi
