import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

/**
 * Primary UI component for user interaction
 */
export const Aria = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  function polite() {
    console.log("click");
    let target = document.getElementById("aria-target-polite")
    target.append("Hello World");
  };

  function assertive() {
    console.log("click");
    let target = document.getElementById("aria-target-assertive")
    target.append("Hello World!!");
  };

  return (
    <>
      <h1>Aria-live Demo</h1>
      <br/>
      <Button primary="true" label="Trigger Polite" onClick={() => polite()}></Button>
      <p id="aria-target-polite" aria-live="polite" aria-atomic="true"></p>

      <Button primary="true" label="Trigger Assertive" onClick={() => assertive()}></Button>
      <p id="aria-target-assertive" aria-live="assertive" aria-atomic="true"></p>
    </>
  );
};

Aria.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
