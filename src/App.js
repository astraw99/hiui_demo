import React, { Component } from 'react'
import { Button } from '@hi-ui/hiui' //引入所需组件
import logo from './logo.svg'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />

                    {/* 使用组件 */}
                    <Button type='primary' size='large'>
                        HIUI 按钮
                    </Button>

                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className='App-link'
                        href='https://reactjs.org'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
    }
}

export default App