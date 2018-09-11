import React from 'react'

const TabsComponent = (props) => {
    const tab = [
        { name: 'Tab 1', isActive: true },
        { name: 'Tab 2', isActive: false },
        { name: 'Tab 3', isActive: false }
    ]

        let li = null;
        li = (
        tab.map((tab,index) => {
            return (
            <li className={`btn${props.activeTab === index ? ' active':''}`}
                key={index} 
                onClick={props.changeTab.bind(this, index)}>
                <a href="">{tab.name}</a>
            </li>
            )
        })
        )
  return (
    <ul>
      {li}
    </ul>
  )
}

export default TabsComponent;
