'use strict';

const element = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked comment number ' + this.props.commentID;
        }

        return element(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

// Find all DOM containers, and render Like buttons into them.
const rootEl = document.getElementById('root')
// Read the comment ID from a data-* attribute.
// const commentID = parseInt(rootEl.dataset.commentid, 10);
const root = ReactDOM.createRoot(rootEl);
root.render(
    element(LikeButton, { commentID: 1 })
);