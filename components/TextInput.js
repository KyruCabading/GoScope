export default (props) => (
  <div>
    {/* <span class="icon"><i class="fa fa-search"></i></span> */}
    <input
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      className="text-input"
      onKeyPress={props.onKeyPress}
      onChange={props.onChange}
      value={props.value}
    />
    <style jsx>{`   
      .text-input {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 300;
        margin-top: 2vh;
        padding: 15px;
        text-overflow: ellipsis;
        width: 50vw;
        border: none;
        border-radius: 5px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        -webkit-appearance: none;
        -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
      }
      
      .text-input:focus {
        border-color: #4d90fe;
      }
    `}</style>
  </div>
)