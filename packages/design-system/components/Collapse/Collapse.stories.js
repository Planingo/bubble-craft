import React from 'react';

import { Collapse } from './Collapse';
import { Panel } from './Panel/Panel';

export default {
  title: 'Molécules/Collapse',
  component: Collapse,
};

const CollapseGlobal = (args) => <Collapse {...args} />;

export const Default = CollapseGlobal.bind({});

Default.args = {
  defaultActiveKey: ['1'],
  onChange: (key) => console.log(key),
  children: <>
    <Panel header="This is panel header 1" key="1">
      <p>
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
      </p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
      </p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
      </p>
    </Panel>
  </>
};