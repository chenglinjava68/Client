const React = require('react');
const {
  Text,
  TouchableOpacity,
  View,
  Image,
  Switch,
} = require('react-native');
const sb = require('react-native-style-block');

class ListCell extends React.Component {
  render() {
    let Container = this.props.onPress ? TouchableOpacity : View;
    return (
      <Container
        style={[...styles.container, this.props.style]}
        onPress={() => this.props.onPress && this.props.onPress()}
      >
        <Text style={[styles.icon, {color: this.props.color}]}>{this.props.icon}</Text>
        <Text style={styles.title}>{this.props.title}</Text>
        {
          this.props.onPress ? (
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.value}>{this.props.value}</Text>
              <Text style={[styles.icon, ...styles.arrow]}>&#xe60e;</Text>
            </View>

          ) : this.props.onChange ? (
            <Switch value={this.props.value || false} onValueChange={(newValue) => this.props.onChange && this.props.onChange(newValue)} />
          ) : null
        }
      </Container>
    )
  }
}

const styles = {
  container: [
    sb.direction(),
    sb.bgColor(),
    // sb.border('Top', 0.5, '#ccc'),
    sb.border('Bottom', 0.5, '#ccc'),
    sb.padding(0, 4, 0, 6),
    sb.alignCenter(),
    {height: 48},
  ],
  icon: {
    fontFamily: 'iconfont',
    fontSize: 26,
    marginRight: 6,
  },
  title: [
    sb.flex(),
    sb.font(18),
  ],
  arrow: [
    sb.font(18),
    sb.color('#ccc'),
  ],
  value: [
    sb.font(18),
    sb.color('#ccc'),
    sb.margin(0, 4, 0, 0),
  ],
}

module.exports = ListCell;
