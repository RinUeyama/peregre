import React from 'react';
import { AbilityButton } from '~/components/actor/button/AbilityButton';
import MOCK_ABILITY_BUTTON_PROPS from '~/__mocks__/components/actor/button/AbilityButton';
import { render } from '@testing-library/react';

describe('actor/button', () => {
  const snapshot = render(<AbilityButton {...MOCK_ABILITY_BUTTON_PROPS}/>);

  it('default test', () => {
    expect(snapshot.baseElement).toMatchSnapshot();
  });
});