import { View, ViewProps, ViewPropTypes } from "react-native";
import React from 'react'
import { Component } from 'react';
//描述事件的bean类
class EventBean {
    step: EventStepType  //事件的阶段
    startBehavior: EventBehaviorType //事件开始时的展示方式
    errorBehavior: EventBehaviorType //事件结束时的展示方式
    completeBehavior: EventBehaviorType //事件完成时的展示方式

    constructor(step: EventStepType = EventStepType.IDLE,
        startBehavior: EventBehaviorType = EventBehaviorType.UN_CANCELABLE_DIALOG,
        errorBehavior: EventBehaviorType = EventBehaviorType.TOAST,
        completeBehavior: EventBehaviorType = EventBehaviorType.NOTHING) {
        this.step = step
        this.startBehavior = startBehavior
        this.errorBehavior = errorBehavior
        this.completeBehavior = completeBehavior
    }
}

export enum EventBehaviorType {
    NOTHING,//什么也不做
    TOAST,//弹出吐司提示
    ERRIR_VIEW,//错误UI视图
    UN_CANCELABLE_DIALOG,//不可取消
    CANCELABLE_DIALOG,//可以取消的dialog

}
export enum EventStepType {
    IDLE,//事件闲置中
    START,//开始处理
    COMPLETE,//处理完成
    ERROR,//处理失败
}
class EventProgressView extends Component {
    render() {
        return <View {...this.props} />
    }
}
// const HOC = (WrappedComponent: React.ComponentClass) =>
//     class WrapperComponent extends React.Component {
//         render() {
//             return <WrappedComponent {...this.props} />;
//         }
//     }
// const HOCView = <{event:EventBean} && ViewPropTypes>(ComponentA: React.ComponentType<{event:EventBean && ViewPropTypes}>): React.ComponentClass => {
//     return class HOCEventView extends React.Component{
//         render() {
//             var event = { event: new EventBean() }
//             return <ComponentA {...this.props} {...event} />
//         }
//     }
// }
// export const ExtendView = HOCView(View)


// const  HOCEventView = (ComponentA: React.ComponentClass): React.ComponentClass => {
//     return class HOCEventView extends ComponentA{
//         render() {
//             this.props.event.step
//             return <ComponentA {...this.props} {...event} />
//         }
//     }
// }
// export const EventView = HOCEventView(ExtendView)
