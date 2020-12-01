import { Button, message } from 'antd';
import { Component } from 'react';
/**
 * 应用的根组件
 */

export default class App extends Component {

    handleClick = () => {
        message.success('成功了....')
    }
    render() {
        return <Button type="primary" onClick={this.handleClick}>测试按钮</Button>
    }
}