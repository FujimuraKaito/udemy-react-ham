// ReactはJSXを使うときは必要(for JSX)
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';

import { getEvent, deleteEvent, putEvent } from '../actions'
import events from '../reducers/events';

class EventsShow extends Component {
  constructor(props) {
    super(props)
    // クラスのインスタンスでonSubmitが使える状態にする
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }
  // レンダリングが完了したらイベント情報を拾ってくるという処理を書かないといけない
  componentDidMount() {
    const { id } = this.props.match.params
    if (id) this.props.getEvent(id)
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
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  async onDeleteClick() {
    // matchとあは？
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
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
            <Link to="/" onClick={this.onDeleteClick}>Delete</Link>

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

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, event }
}

// ショートハンド→同じ名前の時は使える
const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent })

export default connect(mapStateToProps, mapDispatchToProps)(
  // enableReinitializeはinitialValueの値が変わるたびにフォームが毎回初期化されるというプロパティ
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow)
  )

