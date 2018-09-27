import React from 'react';
import { Input,Button,Row,Col,Form} from 'antd';
import PropTypes from 'prop-types'
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
}
class SearchContent extends React.Component {
  constructor(props) {
    super(props);
  }
  handleReset = (event) => {
    const fields = this.props.form.getFieldsValue();
    for (let item in fields) {
      if ({}.hasOwnProperty.call(fields, item)) {
        if (fields[item] instanceof Array) {
          fields[item] = [];
        } else {
          fields[item] = undefined;
        }
      }
    }
    this.props.form.setFieldsValue(fields);
    this.props.SearchDateByQuery();
    event.preventDefault();
  }
  handClick = () => {
    this.props.form.validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...this.props.form.getFieldsValue(),
      }
      this.props.SearchDateByQuery(data);
    })
  }
  render (){
    const {getFieldDecorator} = this.props.form;
    return (
      <div className="marginTop10">
        <Row gutter={8}>
          <Col sm={24} md={8}>
            <FormItem label="用户名" hasFeedback {...formItemLayout}>
              {getFieldDecorator('username', {})(<Input placeholder='用户名'/>)}
            </FormItem>
          </Col>

          <Col sm={24} md={16} >
              <span className="fr">
                <Button type="primary" icon="search" onClick={this.handClick}>搜索</Button>
                <Button type="default" className='inputMargin' icon="reload" onClick={this.handleReset}>重置</Button>
              </span>
          </Col>
        </Row>
    </div>)
  }
};

SearchContent.propTypes = {
  SearchDateByQuery:PropTypes.func,
};

export default Form.create()(SearchContent);
