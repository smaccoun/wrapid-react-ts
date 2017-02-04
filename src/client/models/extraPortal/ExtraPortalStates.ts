// import {TypeState} from 'typestate'
//
// enum VIEWS {
//   LOADING,
//   ProfileWizard,
//   AllFormStatus,
//   DailyTasks
// }
//
// const viewStates = new TypeState.FiniteStateMachine<VIEWS>(VIEWS.LOADING);
//
// viewStates.from(VIEWS.LOADING).to(VIEWS.ProfileWizard)
// viewStates.from(VIEWS.LOADING).to(VIEWS.DailyTasks)
// viewStates.from(VIEWS.ProfileWizard).to(VIEWS.AllFormStatus)
// viewStates.from(VIEWS.AllFormStatus).to(VIEWS.DailyTasks)
//
// enum ProfileStates {
//   UNKNOWN,
//   INCOMPLETE,
//   COMPLETE
// }
//
// const profileStates = new TypeState.FiniteStateMachine<ProfileStates>(ProfileStates.UNKNOWN)
//
// profileStates.from(ProfileStates.UNKNOWN).to(ProfileStates.INCOMPLETE)
// profileStates.from(ProfileStates.UNKNOWN).to(ProfileStates.COMPLETE)
// profileStates.from(ProfileStates.INCOMPLETE).to(ProfileStates.COMPLETE)
//
// enum WizardStates {
//   IGNORE,
//   INCOMPLETE,
//   COMPLETE
// }
//
// const wizardStates = new TypeState.FiniteStateMachine<WizardStates>(WizardStates.INCOMPLETE)
//
// wizardStates.from(WizardStates.INCOMPLETE).to(WizardStates.COMPLETE)
//
// profileStates.on(ProfileStates.COMPLETE, (from: ProfileStates) => {
//   switch(from){
//     case ProfileStates.INCOMPLETE:
//       wizardStates.go(WizardStates.INCOMPLETE)
//       break;
//     case ProfileStates.UNKNOWN:
//       wizardStates.go(WizardStates.IGNORE)
//   }
// })
//
//
//
// type ROUTES = 'ExtraPortal.ProfileWizard' | 'ExtraPortal.DailyTasks' | 'ExtraPortal.AllFormStatus'
// type UserViewRequest = 'DailyTasks' | 'FormStatus'
// class RequiredState {
//   constructor(isLoading: boolean, isProfileComplete?: boolean, isWizardComplete?: boolean, requestView?: UserViewRequest) {
//     this.isLoading = isLoading;
//     this.isProfileComplete = isProfileComplete;
//     this.isWizardComplete = isWizardComplete;
//     this.requestView = requestView;
//   }
//   isLoading: boolean
//   isProfileComplete: boolean
//   isWizardComplete: boolean
//   requestView?: UserViewRequest
// }
//
// interface ExtraPortalStateView {
//   route: ROUTES
//   requiredState: RequiredState
// }
//
// interface LoadingV extends ExtraPortalStateView {
//   route: 'ExtraPortal.DailyTasks' | 'ExtraPortal.ProfileWizard' | 'ExtraPortal.AllFormStatus'
//   requiredState: {
//     isLoading: true,
//     isProfileComplete: true | false,
//     isWizardComplete: true | false
//   }
// }
//
// interface DailyTasksV extends ExtraPortalStateView {
//   route: 'ExtraPortal.DailyTasks'
//   requiredState: {
//     isLoading: false,
//     isProfileComplete: true,
//     isWizardComplete: true,
//     requestView: 'DailyTasks'
//   }
// }
//
//
// interface ProfileWizardV extends ExtraPortalStateView {
//   route: 'ExtraPortal.ProfileWizard'
//   requiredState: {
//     isLoading: false,
//     isProfileComplete: false,
//     isWizardComplete: true | false
//   }
// }
//
// interface AllFormStatusV {
//   route: 'ExtraPortal.AllFormStatus'
//   requiredState: {
//     isLoading: false,
//     isProfileComplete: true,
//     isWizardComplete: true,
//     requestView: 'FormStatus'
//   }
// }
//
// type StateView = LoadingV | DailyTasksV | ProfileWizardV | AllFormStatusV
//
// const getDefaultLoadingV = (): LoadingV => {
//   return {
//     route: 'ExtraPortal.DailyTasks',
//     requiredState: {
//       isLoading: true,
//       isProfileComplete: false,
//       isWizardComplete: false
//     }
//   }
// }
//
// const getDefaultFormStatusV = ():AllFormStatusV => {
//   return {
//     route: 'ExtraPortal.AllFormStatus',
//     requiredState: {
//       isLoading: false,
//       isProfileComplete: true,
//       isWizardComplete: true,
//       requestView: 'FormStatus'
//     }
//   }
// }