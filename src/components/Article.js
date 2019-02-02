import React, {Component} from 'react'

class  Article extends Component {

    state = {
        isOpen: false
    }



    render() {
        const {article, } = this.props
        console.log('----', this.props)
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'open' : 'close'}
                    </button>
                </h2>
                {body}
                <h3>Creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
        console.log('---', 'clicked')
    }
}




export default Article