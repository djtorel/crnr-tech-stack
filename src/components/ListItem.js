import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

import { CardItem } from './common';

class ListItem extends Component {
  render() {
  const { titleStyle } = styles;
    return (
      <CardItem>
        <Text style={titleStyle}> { this.props.library.title } </Text>
      </CardItem>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
});

export default ListItem;
