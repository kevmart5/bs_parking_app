import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FacebookShareButton, EmailShareButton } from 'react-share';
import { FacebookIcon, EmailIcon } from 'react-share';
import { FacebookShareCount } from 'react-share';
import './share-modal-styles.css';

//const shareUrl = 'https://www.facebook.com/';
const shareUrl = 'https://en-gb.facebook.com/'
const emailUrl = 'https://mail.google.com/mail/'

class ShareModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      spaceDetails: {},
      subjectEmail: 'Parking space available in Konrad Group',
      messagebody: `Hey, there is one parking space in Konrad with the code ${this.props.space.space.code}. You may want take a look in the app`
    }
  }

  render() {
    return (
      <React.Fragment>
        <Modal isOpen={this.props.modal}>
          <ModalHeader>Share parking space information</ModalHeader>
          <ModalBody>
            You can share this parking information in facebook to anyone in Konrad group.
            Click in the icon below:

            <div className="row">
              <div className="col-md-12">
                <div className="d-flex justify-content-center share-modal__share-button">
                  <FacebookShareButton
                    url={shareUrl}
                    quote={this.state.messagebody}>
                    <FacebookIcon
                      size={52}
                      round />
                  </FacebookShareButton>
                  <EmailShareButton
                    url={''}
                    subject={this.state.subjectEmail}
                    body={this.state.messagebody}>
                    <EmailIcon
                      size={52}
                      round />
                  </EmailShareButton>
                </div>
              </div>
            </div>
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