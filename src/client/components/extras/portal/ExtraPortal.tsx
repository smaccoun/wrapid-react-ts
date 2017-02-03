import * as React from 'react';
import {observer} from 'mobx-react'

import Dashboard from '../../generic/layouts/dashboard/Dashboard/Dashboard'
import {DefaultRightActionItems} from "../../generic/layouts/dashboard/Navbar/Navbar";
import {ExtraPortalModel, VIEW_NAMES} from "../../../models/extraPortal/ExtraPortalModel";
import {ProfileWizardModel} from "../../../models/extraPortal/profileWizard/ProfileWizardModel";
import viewAllFormStatus from "../forms/AllFormStatus/AllFormStatus";
import viewDailyTasks from "../dailyTasks/DailyTasksMainPage/DailyTasksMainPage";
import ProfileWizard from "../profile/ProfileWizard/ProfileWizard";


@observer
class ExtraPortal extends React.Component<{extraPortalModel: ExtraPortalModel}, {}>{

  renderMainView = () => {
    const {extraPortalModel} = this.props;
    const mainModelView = extraPortalModel.mainModelView;
    switch(mainModelView.viewName){
      case VIEW_NAMES.LOADING:
        return <div>Loading...</div>
      case VIEW_NAMES.PROFILE_WIZARD:
        const profileWizardModel = mainModelView.model
        return  <ProfileWizard model={profileWizardModel}/>
      case VIEW_NAMES.ALL_FORM_STATUS:
        return viewAllFormStatus({})
      case VIEW_NAMES.DAILY_TASKS:
        return viewDailyTasks({})
      default:
        return viewDailyTasks({});

    }
  }

  public render() {
    const navbarRightItems: React.ReactElement<any> = <DefaultRightActionItems/>
    return(
      <Dashboard navbarRightItems={navbarRightItems}>
        {this.renderMainView()}
      </Dashboard>
    )
  }
}

const viewExtraPortal = (model: ExtraPortalModel): React.ReactElement<{}> => {
  console.log(model);
  return <ExtraPortal extraPortalModel={model}/>
}

export {viewExtraPortal, ExtraPortal}
