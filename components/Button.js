export default (props) => (
  <div>
    <button
      className="button"
      type="button"
      {...props}
    >
    {props.children}
    </button>
    <style jsx>{`   
      .button {
        font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
        font-size: 14px;
        font-weight: 400;
        color: #708090;
        margin: 15px;
        padding: 10px;
        border-radius: 10px;
        border-width: 0;
        box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
        background-color: white;
        outline: none;
        transition: color .3s;
      }
      .button:hover, .button:focus {
        color: #5dd2fd;
      }
    `}</style>
  </div>
)