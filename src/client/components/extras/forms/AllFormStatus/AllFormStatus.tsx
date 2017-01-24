import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
  model: any;
}

const AllFormStatus = (props: any) => {
  return(
    <div>You completed them!</div>
  )
}

const viewAllFormStatus = (model : any) => {
  return class PP extends React.Component<{}, {}> {
    render(){
      return(
        <AllFormStatus model={model} />
      )
    }
  }
}

export default viewAllFormStatus;
