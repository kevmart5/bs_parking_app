import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FacebookShareButton } from 'react-share';
import { FacebookIcon } from 'react-share';
import { FacebookShareCount } from 'react-share';

const shareUrl = 'https://www.facebook.com/';

class ShareModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      spaceDetails: {}
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <Modal isOpen={this.props.modal}>
          <ModalHeader>Share parking space information</ModalHeader>
          <ModalBody>
            You can share this parking information in facebook to anyone in Konrad group you want it to see it.
            Click in the icon below:
            <FacebookShareButton
              url={shareUrl}
              quote={
                `Hey, there is one parking space in Konrad with the code ${this.props.space.space.code}. You may want take a look in the app`
              }
              className="Demo__some-network__share-button">
              <FacebookIcon
                size={42}
                round />
            </FacebookShareButton>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.onClose}>Close</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ShareModal;