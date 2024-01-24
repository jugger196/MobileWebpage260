'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return e(
        'span',
        {style:{color:"goldenrod",background:"none",fontSize:22,align:"center"}},
        'YAAAY You liked it, you really liked it! Now heres your prize~ https://www.youtube.com/watch?v=xvFZjo5PgG0');
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));