import "./Terminal.css";

import React from "react";

export default class Terminal extends React.Component {
  constructor(props) {
    super(props);
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView();
  };
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }
  render() {
    const { messages } = this.props;
    // let t = null;
    // if (this.messagesEnd) {
    //   if (this.messagesEnd.offsetTop > window.innerHeight) {
    //     console.log(this.messagesEnd.offsetTop);

    //     t = <p className="label top">Top</p>;
    //   }
    // }
    return (
      <div className="real-terminal">
        <p>{messages}</p>
        {/* {t} */}

        <div
          ref={el => {
            this.messagesEnd = el;
          }}
        />
      </div>
    );
  }
}
