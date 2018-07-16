import React, { Component } from 'react';
import { View, ScrollView, Picker, Text, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { colorSchemes, languages } from '../../config';
import styles from './styles';

import { connect } from 'react-redux';
import { 
  changeLanguage,
  changeColorScheme
} from '../../actions';

import { withTranslation } from '../../contexts/i18n';
import translate from '../../dictionary';

class Settings extends Component {
  getColorSchemeItems = (lang) => {
    return Object.keys(colorSchemes).map((key) => {
      return (<Picker.Item key={key} label={colorSchemes[key]} value={key} />);
    });
  };

  getLanguageItems = (lang) => {
    return Object.keys(languages).map((key) => {
      return (<Picker.Item key={key} label={languages[key]} value={key} />);
    });
  };

  render() {
    const {
      lang,
      settings: { language, colorScheme }
    } = this.props;

    const inputStyleList = [
      styles.inputStyle,
      { color: colorScheme }
    ];

    return (
      <View style={styles.containerStyle}>
        <View style={styles.inputContainerStyle}>
          <Text style={styles.labelStyle}>{translate(lang, 'Language')}</Text>
          <Picker
            selectedValue={language}
            style={inputStyleList}
            onValueChange={(itemValue, itemIndex) => this.props.changeLanguage(itemValue)}>

            { this.getLanguageItems(lang) }

          </Picker>
        </View>

        <View style={styles.inputContainerStyle}>
          <Text style={styles.labelStyle}>{translate(lang, 'Color scheme')}</Text>
          <Picker
            selectedValue={colorScheme}
            style={inputStyleList}
            onValueChange={(itemValue, itemIndex) =>
              console.log(colorScheme, itemValue) || this.props.changeColorScheme(itemValue)
            }>

            { this.getColorSchemeItems(lang) }

          </Picker>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ settings }) => ({ settings });

export default connect(
  mapStateToProps,
  {
    changeLanguage,
    changeColorScheme
  }
)(withTranslation(Settings));
