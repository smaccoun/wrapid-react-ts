import {TypeState} from 'typestate'
import {ExtraProfileModel} from "./extraPortal/profileWizard/ExtraProfileModel";
import {fromPromise, FULFILLED, IPromiseBasedObservable} from "mobx-utils";
import {action, observable, when} from "mobx";
//Server calls
let loadProfile: () => Promise<ExtraProfileModel>


/**** DEFINE STATES ********/
enum VIEW_STATES {
  LOADING,
  ERROR,
  PROFILE_WIZARD,
  ALL_FORM_STATUS,
  DAILY_TASKS
}


const viewFSM = new TypeState.FiniteStateMachine<VIEW_STATES>(VIEW_STATES.LOADING);

viewFSM.from(VIEW_STATES.LOADING).to(VIEW_STATES.PROFILE_WIZARD);
viewFSM.from(VIEW_STATES.PROFILE_WIZARD).to(VIEW_STATES.ALL_FORM_STATUS);
viewFSM.from(VIEW_STATES.ALL_FORM_STATUS).to(VIEW_STATES.DAILY_TASKS);

/***** MSGS *********/
interface PROFILE_LOADED {
  isComplete: boolean
}

type MSG = 'NOTHING' | PROFILE_LOADED

const defaultMessage: MSG = 'NOTHING'
let curMessage = observable({
  msg: defaultMessage,
  setMsg: action((msg: MSG) => {
    this.msg = msg;
  })
})


const profileLoader = fromPromise(loadProfile());

when(
  () => profileLoader.state == FULFILLED,
  () => {
    const isComplete = profileLoader.value.isComplete
    const profLoaded: PROFILE_LOADED = {isComplete}
    curMessage.setMsg(profLoaded)
  }
)


/***** UPDATES *******/
const update = (msg: MSG) => {

}








