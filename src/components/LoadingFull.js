import React, { Component } from 'react';
import { Grid, Modal } from 'semantic-ui-react';
import { PulseLoader } from 'react-spinners';
// import PropTypes from 'prop-types';

export default class LoadingFull extends Component {

  // static propTypes = {
  //   loading: PropTypes.bool.isRequired
  // }

  render() {
    const { loading } = this.props

    return (
      <div className="loginmodal">
        <Modal basic dimmer={'blurring'} open={loading} size='tiny'>
            <Grid>
              <Grid.Row columns={3} centered>
                <Grid.Column textAlign='center'>
                  <PulseLoader
                    color = {'#f66565'}
                    loading = {loading}
                    size = {15}
                    margin ={10}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </Modal>
      </div>
    )
  }

}
