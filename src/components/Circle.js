import React from 'react';

class Circle extends React.Component {


  shouldComponentUpdate(nextProp, nextState){
    return(this.props.color !== nextProp.color)
  }
  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
