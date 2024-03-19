import React from 'react'
import { Dropdown } from '../components/Dropdown/Dropdown'
import { SmileOutlined } from '../components/Icon/icon'

describe('<Dropdown />', () => {
  it('renders', () => {
    cy.mount(<Dropdown
      menu={{
        items: [
          {
            key: '1',
            label: <a href="https://www.antgroup.com" rel="noopener noreferrer" target="_blank">1st menu item</a>
          },
          {
            disabled: true,
            icon: <SmileOutlined />,
            key: '2',
            label: <a href="https://www.aliyun.com" rel="noopener noreferrer" target="_blank">2nd menu item (disabled)</a>
          },
          {
            disabled: true,
            key: '3',
            label: <a href="https://www.luohanacademy.com" rel="noopener noreferrer" target="_blank">3rd menu item (disabled)</a>
          },
          {
            danger: true,
            key: '4',
            label: 'a danger item'
          }
        ]
      }}
    >
      <p>
        Hover me
      </p>
    </Dropdown>
    )
  })
})