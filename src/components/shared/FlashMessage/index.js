import React, { Component } from "react";
import { connect } from "react-redux";
import FlashMessageComp, { showMessage } from "react-native-flash-message";
import { getFlashMessage } from "../../../services/app/getHelper";
import { removeFlashMessage } from "../../../services/app/actions";

class FlashMessage extends Component {
  componentDidUpdate(prevProps) {
    if (
      this.props?.flashMessage?.type !== null &&
      prevProps?.flashMessage?.type !== this.props?.flashMessage?.type
    ) {
      showMessage(this.props?.flashMessage);
      setTimeout(() => {
        const { dispatch } = this.props;
        dispatch(removeFlashMessage());
      }, 4000);
    }
  }

  render() {
    return <FlashMessageComp position="top" />;
  }
}

const mapStateToProps = (state) => {
  const flashMessage = getFlashMessage(state);
  return {
    flashMessage,
  };
};

export default connect(mapStateToProps)(FlashMessage);
