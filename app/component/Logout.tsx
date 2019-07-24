import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Button, Icon } from 'native-base';
import UserService from '../service/UserService'
import { color } from '../util/config'
export default class Logout extends React.Component {
  private async logout() {
    const service: UserService = new UserService()
    service.logout()
      .then(() => {
        Actions.replace('login');
      })
      .catch((err: any) => {
        console.error(err);
      });
  }
  render() {
    return (
      <Button onPress={() => this.logout()}>
        <Icon style={{ color: color.secondary }} name="exit" />
      </Button>
    );
  }
}
