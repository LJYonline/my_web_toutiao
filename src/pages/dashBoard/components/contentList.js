import React from 'react'

const List ={
    tab1:<p>content1</p>,
    tab2:<p>content2</p>,
}
function contentList ({data}) {


    console.log('------',data)
  return(
    <div>
      <h1>{List}</h1>
    </div>

  )
}


export default contentList
