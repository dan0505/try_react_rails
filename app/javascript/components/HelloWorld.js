import React from "react"
import PropTypes from "prop-types"
export default function HelloWorld({ greeting }) {
  return (
    <>
      Greeting: {greeting}
      something else
      some
    </>
  );
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
