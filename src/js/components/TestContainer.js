import React from "react"
import { connect } from 'react-redux'
import TestComponent from "./TestComponent"
import { incrementCounterAsync, incrementCounterFailing } from '../actions/middlewareActions'

const mapStateToProps = (state) => {
    console.dir(state)
     return {
        output: state.midware.output,
        value: state.counter.value,
        fetching: state.counter.fetching,
        error: state.counter.error
     }
    }

const mapDispatchToProps = (dispatch) =>  (
   {
    incButtonClicked: () => dispatch(incrementCounterAsync()),
    failingIncButtonClicked: () => dispatch(incrementCounterFailing())
   }
)

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)
