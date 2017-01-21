// type Form = require('../../../../../../typings/mobx-react-form/Form.d')
// const MobxReactForm: Form = require('mobx-react-form');
//
// class ContentForm extends MobxReactForm {
//
//   onSuccess(form: any) {
//     alert('Form is valid! Send the request here.');
//     // get field values
//     console.log('Form Values!', form.values());
//   }
//
//   onError(form: any) {
//     // get all form errors
//     console.log('All form errors', form.errors());
//     // invalidate the form with a custom error message
//     form.invalidate('This is a generic error message!');
//   }
// }
//
// export default ContentForm


import * as React from 'react';
import * as ReactDOM from 'react-dom';

const injectTapEventPlugin = require('react-tap-event-plugin');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class ContentForm extends React.Component<{}, {}> {
  public render(){
    return(
      <MuiThemeProvider>
        <RaisedButton label="Default" />
      </MuiThemeProvider>
    )
  }
}

export default ContentForm
