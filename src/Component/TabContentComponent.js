import React from 'react'

const TabContentComponent = (props) => {
    const tabkonten = [
        { name: 'tab konten 1', tab: true },
        { name: 'tab konten 2', tab: false },
        { name: 'tab konten 3', tab: false }
    ]

    let konten = null;
    konten = (
        tabkonten.map((konten, index) => {
            if(props.activeTab === index){
                return (
                    <p key={index}>{konten.name}</p>                    
                )
            }
            return false
        })
    )
  return (
    <div>
      {konten}
    </div>
  )
}

export default TabContentComponent;
