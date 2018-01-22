import React from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd'

const FormItem = Form.Item;

class Login extends React.Component {

    constructor(props) {
        super(props);

        // 初始化状态
        this.state = {

        }

    }

    hanldeSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('///', values);
            }
        });
    }
    
    render() {

        const {getFieldDecorator} = this.props.form;

        return (
            <Form onSubmit={this.hanldeSubmit} className='login-form'>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{}]
                    })}

                </FormItem>
                <FormItem>


                </FormItem>
            </Form>
        );
    }
}

export default Login