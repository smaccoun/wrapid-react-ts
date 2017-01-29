import * as React from 'react';
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'

@observer
class Login extends React.Component<{}, {}> {

  @observable usernameInput: String | null = '';

  @action setUserNameInput = (e: any) => {
    console.log(e.target.value);
    this.usernameInput = e.target.value;
  }

  public render() {
    return(
      <div>
        <input onChange={this.setUserNameInput}/>
        <input/>
        <button>Submit</button>
      </div>
    )
  }
}

export default Login
