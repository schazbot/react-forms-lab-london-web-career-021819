import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (e) =>{
    this.setState({
      message: e.target.value
    })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
        name="message" 
        id="message" 
        value={this.state.message} 
        onChange={this.handleChange}/>
        
        <h2>Remaining Characters:
        {this.props.maxChars - this.state.message.length}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
