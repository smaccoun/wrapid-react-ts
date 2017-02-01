import * as React from 'react';
import {observer} from 'mobx-react'

import Dashboard from '../../generic/layouts/dashboard/Dashboard/Dashboard'
import {DefaultRightActionItems} from "../../generic/layouts/dashboard/Navbar/Navbar";
import {ExtraPortalModel} from "../../../models/extraPortal/ExtraPortalModel";


@observer
class ExtraPortal extends React.Component<{extraPortalModel: ExtraPortalModel}, {}>{

  public render() {
    console.log(this.props);
    const MainView = this.props.extraPortalModel.mainView;
    const navbarRightItems: React.ReactElement<any> = <DefaultRightActionItems/>
    return(
      <Dashboard navbarRightItems={navbarRightItems}>
        <MainView />
      </Dashboard>
    )
  }
}

const viewExtraPortal = (model: ExtraPortalModel): React.ReactElement<{}> => {
  console.log(model);
  return <ExtraPortal extraPortalModel={model}/>
}

export {viewExtraPortal, ExtraPortal}
