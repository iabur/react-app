let coutn = 0;

function Message() {
  coutn++;
  return <h1>Hello World {coutn}</h1>;
}

export default Message;
