import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactTransitionGroup from 'react-addons-transition-group';
import {TweenMax, Power2, TimelineLite} from "gsap";

console.log(ReactTransitionGroup)

function fadesUp (Component: React.ComponentClass<any>): React.ComponentClass<any> {
    class FadesUp extends React.Component<any, any> {

        componentWillAppear(callback) {
            const el = ReactDOM.findDOMNode(this);
            console.error('ENTERING!!!!!!!!!!')
            const onComplete = () => console.log('meow')
            TweenMax.fromTo(el, 0.6, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete});
        }


        render () {
            return(
                <Component ref="child" {...this.props} />
            )
        }
    }

    class FadeComponent extends React.Component<any, any>{
        render(){
            return(
                <ReactTransitionGroup>
                    <FadesUp key={1} {...this.props}/>
                </ReactTransitionGroup>
            )
        }

    }

    return FadeComponent
}

export default fadesUp;