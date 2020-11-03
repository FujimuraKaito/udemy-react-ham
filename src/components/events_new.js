// ReactはJSXを使うときは必要(for JSX)
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'

import { postEvent } from '../actions'

class EventsNew extends Component {
  constructor(props) {
    super(props)
    // クラスのインスタンスでonSubmitが使える状態にする
    this.onSubmit = this.onSubmit.bind(this)
  }
  // 入力されるフィールドの値が渡ってくる
  renderField(field) {
    const { input, label, type, meta: {touched, error} } = field

    return(
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }


  render() {
    // pristineはフォームが入力されているかどうか
    // submittingはフォームがsubmitされたかどうか
    const { handleSubmit, pristine, submitting, invalid } = this.props
    return (
      <React.Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div><Field label="Title" name="title" type='text' component={this.renderField} /></div>
          <div><Field label="Body" name="body" type='text' component={this.renderField} /></div>
          <div>
            {/* フォームが入力されるか一度押されたら，ボタンをdisableにしておく */}
            <input type="submit" value="Submit" disabled={pristine || submitting || invalid} />
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}

// ショートハンド→同じ名前の時は使える
const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
  )

