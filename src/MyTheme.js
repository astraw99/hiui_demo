import React from 'react'
import { ThemeContext } from '@hi-ui/hiui/es/context'
import Button from '@hi-ui/hiui/es/button'
import DatePicker from '@hi-ui/hiui/es/date-picker'
import Grid from '@hi-ui/hiui/es/grid'

class MyGrid extends React.Component {
    render() {
        const Row = Grid.Row
        const Col = Grid.Col

        return (
            <div>
                {/*第1行*/}
                <Row gutter={false}>
                    <Col span={12}>
                        <Button type="primary">突出按钮1</Button>
                        <Button type="line">普通按钮1</Button>
                        <Button type="default">默认按钮1</Button>
                        <Button type="primary">确认1</Button>
                        <Button type="line">取消1</Button>
                    </Col>
                    <Col span={12}>
                        <DatePicker
                            type='daterange'
                            value={new Date()}
                            onChange={(d) => {
                                console.log('last', d)
                            }}
                        />
                    </Col>
                </Row>

                {/*第2行*/}
                <Row gutter={true}>
                    <Col span={12}>
                        <Button type="primary">突出按钮1</Button>
                        <Button type="line">普通按钮1</Button>
                        <Button type="default">默认按钮1</Button>
                        <Button type="primary">确认1</Button>
                        <Button type="line">取消1</Button>
                    </Col>
                    <Col span={20}>
                        <DatePicker
                            type='daterange'
                            value={new Date()}
                            showTime={true}
                            onChange={(d) => {
                                console.log('last', d)
                            }}
                        />
                    </Col>
                </Row>

                {/*第3行，含自定义主题颜色*/}
                <ThemeContext.Provider value='magenta'>
                    <Row gutter={true}>
                        <Col span={12}>
                            <Button type="primary">突出按钮</Button>
                            <Button type="line">普通按钮</Button>
                            <Button type="default">默认按钮</Button>
                            <Button type="primary">确认</Button>
                            <Button type="line">取消</Button>
                        </Col>
                        <Col span={12}>
                            <DatePicker
                                type='daterange'
                                value={new Date()}
                                onChange={(d) => {
                                    console.log('last', d)
                                }}
                            />
                        </Col>
                    </Row>
                </ThemeContext.Provider>
            </div>
        )
    }
}

export default MyGrid