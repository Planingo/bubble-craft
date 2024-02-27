import { Collapse } from '../components/Collapse/Collapse';
import { Panel } from '../components/Collapse/Panel/Panel';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Molécules/Collapse',
  component: Collapse,
  decorators: [withTests({ results })],
  parameters: { jest: ['collapse.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
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
  },
};
