export default (props) => (
  <div>
    <input
      className="text-input"
      {...props}
    />
    <style jsx>{`   
      .text-input {
        font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
        font-size: 16px;
        font-weight: 300;
        margin-top: 2vh;
        padding: 15px;
        text-overflow: ellipsis;
        width: 60vw;
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